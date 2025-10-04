import { LoginForm } from '@/components/auth/LoginForm';
import { getAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const { user } = await getAuth();
  if (user) {
    redirect('/dashboard');
  }
  return <LoginForm />;
}
