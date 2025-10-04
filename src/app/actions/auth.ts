'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const FAKE_USER_EMAIL = 'test@example.com';
const FAKE_USER_PASSWORD = 'password123';

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // In a real app, you'd validate credentials against a database
  if (email === FAKE_USER_EMAIL && password === FAKE_USER_PASSWORD) {
    cookies().set('auth_token', email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    redirect('/dashboard');
  }

  // Redirect back to login with an error message
  redirect('/login?error=InvalidCredentials');
}

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string;
  
  // In a real app, you'd create a new user in your database.
  // For this mock, we'll just log them in as the new user.
  cookies().set('auth_token', email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/',
  });

  redirect('/dashboard');
}

export async function signOut() {
  cookies().delete('auth_token');
  redirect('/');
}
