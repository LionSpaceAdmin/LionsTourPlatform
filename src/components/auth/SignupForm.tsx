'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthCard } from './AuthCard';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';
import { signUp } from '@/app/actions/auth';

const initialState = {
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : 'Create Account'}
    </Button>
  );
}

export function SignupForm() {
  const [state, formAction] = useFormState(signUp, initialState);

  return (
    <AuthCard
      title="Create an Account"
      description="Begin your journey with us today."
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Log In"
    >
      <form action={formAction} className="grid gap-4">
        <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Lion Cub" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>

        {state?.error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Sign Up Failed</AlertTitle>
            <AlertDescription>
              {state.error}
            </AlertDescription>
          </Alert>
        )}

        <SubmitButton />
      </form>
    </AuthCard>
  );
}