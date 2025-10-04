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
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { firebaseConfig } from '@/firebase/config';

function getAdminApp(): App {
  if (getApps().length) {
    return getApps()[0]!;
  }

  return initializeApp({
    credential: {
      projectId: firebaseConfig.projectId,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(
        /\\n/g,
        '\n'
      ),
    },
  });
}

async function createSessionCookie(idToken: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  const sessionCookie = await getAdminAuth(getAdminApp()).createSessionCookie(
    idToken,
    { expiresIn }
  );
  cookies().set('auth_token', sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}

export async function signOut() {
  cookies().delete('auth_token');
  redirect('/');
}
