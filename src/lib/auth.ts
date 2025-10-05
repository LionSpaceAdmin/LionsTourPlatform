import { cookies } from 'next/headers';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getAdminApp } from '@/firebase/admin';

export async function getAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  if (token && token.value) {
    try {
      const decodedToken = await getAdminAuth(getAdminApp()).verifySessionCookie(token.value, true);
      return { user: { uid: decodedToken.uid, email: decodedToken.email } };
    } catch (error) {
      // If the token is invalid (e.g., expired), delete the cookie
      // and proceed as if the user is not authenticated.
      console.error('Error verifying auth token:', error);
      const cookieStore = await cookies();
      cookieStore.delete('auth_token');
      return { user: null };
    }
  }

  return { user: null };
}