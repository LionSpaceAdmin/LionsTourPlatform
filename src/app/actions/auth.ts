'use server';

import {
  getAuth as getClientAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { initializeFirebase } from '@/firebase';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getAdminApp } from '@/firebase/admin';

async function createSessionCookie(idToken: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  const sessionCookie = await getAdminAuth(getAdminApp()).createSessionCookie(
    idToken,
    { expiresIn }
  );
  const cookieStore = await cookies();
  cookieStore.set({
    name: 'auth_token',
    value: sessionCookie,
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}

export async function signUp(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const { firebaseApp } = initializeFirebase();
    const auth = getClientAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    await createSessionCookie(idToken);
  } catch (error: any) {
    console.error('Sign up error:', error);
    if (error.code === 'auth/email-already-in-use') {
        return { error: 'This email is already in use.' };
    }
    if (error.code === 'auth/weak-password') {
        return { error: 'The password is too weak. Please use at least 6 characters.' };
    }
    return { error: 'An unexpected error occurred. Please try again.' };
  }
  redirect('/dashboard');
}

export async function signIn(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    const { firebaseApp } = initializeFirebase();
    const auth = getClientAuth(firebaseApp);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    await createSessionCookie(idToken);
  } catch (error: any) {
    console.error('Sign in error:', error);
    return { error: 'Invalid email or password.' };
  }
  redirect('/dashboard');
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  redirect('/');
}