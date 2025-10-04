'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthCard } from './AuthCard';
import React from 'react';
import { useAuth } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createSession } from '@/app/actions/session';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function SignupForm() {
    const auth = useAuth();
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();
    const router = useRouter();


  const handleSignUp = async (formData: FormData) => {
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      const sessionResult = await createSession(idToken);
      
      if(sessionResult.success) {
        router.push('/dashboard');
      } else {
        throw new Error(sessionResult.error || 'Could not create session');
      }

    } catch (error: any) {
        let description = 'An unexpected error occurred. Please try again.';
        if (error.code === 'auth/email-already-in-use') {
            description = 'This email address is already in use by another account.';
        } else if (error.code === 'auth/weak-password') {
            description = 'The password is too weak. Please choose a stronger password.';
        }
       
        toast({
            title: 'Sign Up Failed',
            description,
            variant: 'destructive'
        })
        console.error('Sign up error:', error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create an Account"
      description="Begin your journey with us today."
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Log In"
    >
      <form action={handleSignUp} className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Lion Cub" required disabled={loading}/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
            disabled={loading}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required disabled={loading}/>
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : 'Create Account'}
        </Button>
      </form>
    </AuthCard>
  );
}
