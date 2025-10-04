'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthCard } from './AuthCard';
import { signIn } from '@/app/actions/auth';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

export function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <AuthCard
      title="Welcome Back"
      description="Enter your credentials to access your account."
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Sign Up"
    >
      <form action={signIn} className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
            defaultValue="test@example.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" name="password" required defaultValue="password123"/>
        </div>

        {error === 'InvalidCredentials' && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Login Failed</AlertTitle>
            <AlertDescription>
              Invalid email or password. Please try again.
            </AlertDescription>
          </Alert>
        )}

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Log In
        </Button>
      </form>
    </AuthCard>
  );
}
