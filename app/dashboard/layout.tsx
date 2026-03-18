import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserWithCompany, createUserFromClerk } from '@/lib/db/auth';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { DashboardHeader } from '@/components/dashboard/header';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-bg text-white">
        <DashboardSidebar user={user} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <DashboardHeader user={user} />
          <main className="flex-1 overflow-auto p-10 max-w-[1200px] mx-auto w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}