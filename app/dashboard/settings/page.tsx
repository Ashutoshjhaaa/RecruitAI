import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserWithCompany, createUserFromClerk } from '@/lib/db/auth';

export default async function SettingsPage() {
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
        console.error("Failed to provision user in settings page:", error);
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <input
                type="text"
                value={user.role}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
              />
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Save Profile
            </button>
          </div>
        </div>

        {/* Company Settings */}
        <div className="bg-white p-6 rounded-lg shadow border">
          <h2 className="text-lg font-semibold mb-4">Company Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                defaultValue={user.company.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Domain</label>
              <input
                type="text"
                defaultValue={user.company.domain || ''}
                placeholder="company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Plan</label>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Free Plan</span>
                <button className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-lg hover:from-primary/90 hover:to-primary transition-colors">
                  Upgrade Plan
                </button>
              </div>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Save Company
            </button>
          </div>
        </div>

        {/* Account Security */}
        <div className="bg-white p-6 rounded-lg shadow border lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Account Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-medium mb-2">Change Password</h3>
              <p className="text-sm text-gray-600 mb-4">Update your account password</p>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Change Password
              </button>
            </div>
            <div>
              <h3 className="text-md font-medium mb-2">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-600 mb-4">Enhance your account security</p>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Set up 2FA
              </button>
            </div>
            <div>
              <h3 className="text-md font-medium mb-2">Connected Apps</h3>
              <p className="text-sm text-gray-600 mb-4">Manage third-party integrations</p>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Manage Apps
              </button>
            </div>
            <div>
              <h3 className="text-md font-medium mb-2">Privacy Settings</h3>
              <p className="text-sm text-gray-600 mb-4">Control your data and privacy</p>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}