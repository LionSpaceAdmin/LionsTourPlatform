import { cookies } from 'next/headers';
import { initializeApp, getApps, App } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase Admin SDK
function getAdminApp(): App {
  if (getApps().length) {
    return getApps()[0]!;
  }
  
  return initializeApp({
      credential: {
          projectId: firebaseConfig.projectId,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
          privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      }
  });
}


export async function getAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth_token');

  if (token && token.value) {
    try {
      const decodedToken = await getAdminAuth(getAdminApp()).verifyIdToken(token.value);
      return { user: { uid: decodedToken.uid, email: decodedToken.email } };
    } catch (error) {
      // If the token is invalid (e.g., expired), delete the cookie
      // and proceed as if the user is not authenticated.
      console.error('Error verifying auth token:', error);
      cookies().delete('auth_token');
      return { user: null };
    }
  }

  return { user: null };
}
