import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserWithCompany, createUserFromClerk } from '@/lib/db/auth';

export default async function JobsPage() {
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
        console.error("Failed to provision user in jobs page:", error);
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h2">Jobs</h1>
          <p className="text-body mt-2">Manage your job postings and active openings.</p>
        </div>
        <button className="bg-white text-black text-[13px] font-bold px-6 py-2 rounded-lg hover:bg-white2 transition-colors">
          Create Job
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-card-title">Frontend Developer</h3>
            <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Open</span>
          </div>
          <p className="text-small mb-8">Looking for a skilled frontend developer to build modern web applications using React and Next.js.</p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-mono text-[11px]">Posted 2 days ago</span>
            <span className="text-mono text-[11px] text-white">12 applicants</span>
          </div>
        </div>

        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-card-title">Backend Developer</h3>
            <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">Open</span>
          </div>
          <p className="text-small mb-8">Backend developer needed to work on our robust API services and PostgreSQL database systems.</p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-mono text-[11px]">Posted 5 days ago</span>
            <span className="text-mono text-[11px] text-white">8 applicants</span>
          </div>
        </div>

        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-all">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-card-title">Product Manager</h3>
            <span className="bg-bg3 border border-border2 text-white2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">Reviewing</span>
          </div>
          <p className="text-small mb-8">Product manager to lead our cross-functional teams and drive product development initiatives.</p>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-mono text-[11px]">Posted 1 week ago</span>
            <span className="text-mono text-[11px] text-white">15 applicants</span>
          </div>
        </div>
      </div>
    </div>
  );
}