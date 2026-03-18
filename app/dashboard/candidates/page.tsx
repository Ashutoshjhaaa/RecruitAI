import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserWithCompany, createUserFromClerk } from "@/lib/db/auth";

export default async function CandidatesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  let user = await getUserWithCompany(userId);

  if (!user) {
    // JIT Provisioning: If user exists in Clerk but not in DB, create them
    const clerkUser = await currentUser();
    if (clerkUser) {
      const email = clerkUser.emailAddresses[0].emailAddress;
      const name = `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || email;
      
      try {
        await createUserFromClerk(userId, email, name);
        // Re-fetch to get company details
        user = await getUserWithCompany(userId);
      } catch (error) {
        console.error("Failed to provision user in candidates page:", error);
        redirect("/sign-in");
      }
    } else {
      redirect("/sign-in");
    }
  }

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-h2">Candidates</h1>
          <p className="text-body mt-2">Manage your candidate pipeline and interviews.</p>
        </div>
        <button className="bg-white text-black text-[13px] font-bold px-6 py-2 rounded-lg hover:bg-white2 transition-colors">
          Add Candidate
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 bg-bg3 border border-border2 rounded-full flex items-center justify-center text-white font-bold text-mono">
              JD
            </div>
            <div>
              <h3 className="text-card-title">John Doe</h3>
              <p className="text-small">Frontend Developer</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">New</span>
            <span className="text-mono text-[11px]">Applied 2 days ago</span>
          </div>
          <div className="flex gap-4 pt-4 border-t border-border">
            <button className="text-[12px] font-medium text-white hover:text-white2 transition-colors">View Profile ?</button>
            <button className="text-[12px] font-medium text-white2 hover:text-white transition-colors">Schedule</button>
          </div>
        </div>

        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 bg-bg3 border border-border2 rounded-full flex items-center justify-center text-white font-bold text-mono">
              AS
            </div>
            <div>
              <h3 className="text-card-title">Alice Smith</h3>
              <p className="text-small">Backend Developer</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="bg-bg3 border border-border2 text-white2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">Screened</span>
            <span className="text-mono text-[11px]">Applied 5 days ago</span>
          </div>
          <div className="flex gap-4 pt-4 border-t border-border">
            <button className="text-[12px] font-medium text-white hover:text-white2 transition-colors">View Profile ?</button>
            <button className="text-[12px] font-medium text-white2 hover:text-white transition-colors">Schedule</button>
          </div>
        </div>

        <div className="bg-bg2 p-7 rounded-xl border border-border hover:border-border2 transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-12 w-12 bg-bg3 border border-border2 rounded-full flex items-center justify-center text-white font-bold text-mono">
              MR
            </div>
            <div>
              <h3 className="text-card-title">Mike Ross</h3>
              <p className="text-small">Product Manager</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="bg-bg3 border border-border2 text-white2 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">Interviewed</span>
            <span className="text-mono text-[11px]">Applied 1 week ago</span>
          </div>
          <div className="flex gap-4 pt-4 border-t border-border">
            <button className="text-[12px] font-medium text-white hover:text-white2 transition-colors">View Profile ?</button>
            <button className="text-[12px] font-medium text-white2 hover:text-white transition-colors">Schedule</button>
          </div>
        </div>
      </div>
    </div>
  );
}
