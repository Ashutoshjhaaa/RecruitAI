import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserWithCompany, createUserFromClerk } from '@/lib/db/auth';

export default async function SchedulesPage() {
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
        console.error("Failed to provision user in schedules page:", error);
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Interviews & Schedules</h1>
          <p className="text-gray-600 mt-1">Manage your interview schedule</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            + Schedule Interview
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Frontend Developer Interview</h3>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Scheduled</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Candidate:</span>
              <span>John Doe</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Date:</span>
              <span>March 20, 2024 - 2:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Duration:</span>
              <span>45 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Location:</span>
              <span>Google Meet</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:text-primary/80">Join Meeting</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">View Details</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Backend Developer Interview</h3>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Candidate:</span>
              <span>Alice Smith</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Proposed Dates:</span>
              <span>March 21, 2024 - 10:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Duration:</span>
              <span>30 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Location:</span>
              <span>Office</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:text-primary/80">Confirm Time</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">View Details</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Product Manager Interview</h3>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Completed</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Candidate:</span>
              <span>Mike Ross</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Date:</span>
              <span>March 18, 2024 - 3:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Duration:</span>
              <span>60 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Location:</span>
              <span>Zoom</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:text-primary/80">View Recording</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">Add Notes</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Technical Screening</h3>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Cancelled</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Candidate:</span>
              <span>Sarah Johnson</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Original Date:</span>
              <span>March 19, 2024 - 11:00 AM</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Reason:</span>
              <span>Schedule conflict</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-sm text-primary hover:text-primary/80">Reschedule</button>
            <button className="text-sm text-gray-600 hover:text-gray-800">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}