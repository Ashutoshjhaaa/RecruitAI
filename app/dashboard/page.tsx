import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserWithCompany, createUserFromClerk } from '@/lib/db/auth';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  let user = await getUserWithCompany(userId);

  if (!user) {
    // JIT Provisioning: If user exists in Clerk but not in DB, create them
    const clerkUser = await currentUser();
    if (clerkUser) {
      const email = clerkUser.emailAddresses[0].emailAddress;
      const name = `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || email;
      
      try {
        await createUserFromClerk(userId, email, name);
        // Re-fetch to get company details
        user = await getUserWithCompany(userId);
      } catch (error) {
        console.error("Failed to provision user in dashboard:", error);
        redirect('/sign-in');
      }
    } else {
      redirect('/sign-in');
    }
  }

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-h2">Dashboard</h1>
        <p className="text-body mt-2">Welcome back, {user.name}! Here's what's happening with your hiring process.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-card-title">Active Jobs</h3>
            <span className="text-mono text-white text-[20px]">05</span>
          </div>
          <p className="text-small">Manage your current job postings</p>
          <button className="mt-6 text-[13px] font-medium text-white hover:text-white2 transition-colors">View Jobs →</button>
        </div>
        
        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-card-title">New Candidates</h3>
            <span className="text-mono text-green text-[20px]">12</span>
          </div>
          <p className="text-small">Recently applied candidates</p>
          <button className="mt-6 text-[13px] font-medium text-white hover:text-white2 transition-colors">View Candidates →</button>
        </div>
        
        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-card-title">Live Interviews</h3>
            <span className="text-mono text-white text-[20px]">03</span>
          </div>
          <p className="text-small">Scheduled interviews this week</p>
          <button className="mt-6 text-[13px] font-medium text-white hover:text-white2 transition-colors">View Schedule →</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-bg2 p-7 rounded-xl border border-border">
          <h3 className="text-card-title mb-6">Recent Activity</h3>
          <div className="space-y-0">
            <div className="flex items-center justify-between py-4 border-b border-border">
              <div>
                <p className="text-[14px] font-medium text-white">John Doe applied to Frontend Developer</p>
                <p className="text-mono text-[12px] mt-1">2 hours ago</p>
              </div>
              <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">New</span>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-border">
              <div>
                <p className="text-[14px] font-medium text-white">Interview scheduled with Alice Smith</p>
                <p className="text-mono text-[12px] mt-1">4 hours ago</p>
              </div>
              <span className="bg-bg3 border border-border2 text-white2 text-[10px] px-2 py-0.5 rounded-full uppercase">Scheduled</span>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <p className="text-[14px] font-medium text-white">Mike Ross moved to Interviewed stage</p>
                <p className="text-mono text-[12px] mt-1">1 day ago</p>
              </div>
              <span className="bg-bg3 border border-border2 text-white2 text-[10px] px-2 py-0.5 rounded-full uppercase">Updated</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-primary text-white px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center">
              + Post Job
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center">
              Import Candidates
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center">
              Schedule Interview
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
