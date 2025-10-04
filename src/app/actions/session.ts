'use server';

import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { cookies } from 'next/headers';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { firebaseConfig } from '@/firebase/config';
import { redirect } from 'next/navigation';

function getAdminApp(): App {
  if (getApps().length > 0) {
    return getApps()[0]!;
  }

  return initializeApp({
    credential: {
      projectId: firebaseConfig.projectId,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    },
  });
}

export async function createSession(idToken: string) {
  try {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await getAdminAuth(getAdminApp()).createSessionCookie(idToken, {
      expiresIn,
    });
    cookies().set('auth_token', sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to create session:', error);
    return { success: false, error: 'Failed to create session.' };
  }
}
