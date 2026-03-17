import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserWithCompany } from '@/lib/db/auth';

export default async function DashboardPage() {
  const authResult = await auth();
  const userId = authResult.userId;

  if (!userId) {
    redirect('/sign-in');
  }

  const user = await getUserWithCompany(userId);

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          You are signed in as {user.email} from {user.company.name}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Candidates</h2>
          <p className="text-gray-600">Manage your candidate pipeline</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Interviews</h2>
          <p className="text-gray-600">Schedule and track interviews</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p className="text-gray-600">View hiring metrics and insights</p>
        </div>
      </div>
    </div>
  );
}