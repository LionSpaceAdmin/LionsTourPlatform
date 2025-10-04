'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthCard } from './AuthCard';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createSession } from '@/app/actions/session';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const auth = useAuth();
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();


  const handleSignIn = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        toast({
            title: 'Missing fields',
            description: 'Please enter both email and password.',
            variant: 'destructive',
        })
      return;
    }
    
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      const sessionResult = await createSession(idToken);
      
      if(sessionResult.success) {
        router.push('/dashboard');
      } else {
        throw new Error(sessionResult.error || 'Could not create session');
      }

    } catch (error: any) {
        toast({
            title: 'Login Failed',
            description: 'Invalid email or password. Please try again.',
            variant: 'destructive'
        })
        console.error('Sign in error:', error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome Back"
      description="Enter your credentials to access your account."
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Sign Up"
    >
      <form action={handleSignIn} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
            defaultValue="test@example.com"
            disabled={loading}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" required defaultValue="password123" disabled={loading} />
        </div>

        {error === 'InvalidCredentials' && !loading && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>
              Invalid email or password. Please try again.
            </AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : 'Log In'}
        </Button>
      </form>
    </AuthCard>
  );
}
