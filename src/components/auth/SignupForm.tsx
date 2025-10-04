'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthCard } from './AuthCard';
import { signUp } from '@/app/actions/auth';

export function SignupForm() {
  return (
    <AuthCard
      title="Create an Account"
      description="Begin your journey with us today."
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Log In"
    >
      <form action={signUp} className="grid gap-4">
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
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Create Account
        </Button>
      </form>
    </AuthCard>
  );
}
