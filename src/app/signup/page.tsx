import { SignupForm } from '@/components/auth/SignupForm';
import { getAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function SignupPage() {
  const { user } = await getAuth();
  if (user) {
    redirect('/dashboard');
  }
  return <SignupForm />;
}
