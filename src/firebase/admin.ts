import * as admin from 'firebase-admin';
import { firebaseConfig } from '@/firebase/config';

export function getAdminApp(): admin.app.App {
  if (admin.apps.length > 0) {
    return admin.apps[0]!;
  }

  return admin.initializeApp({
    credential: admin.credential.cert({
      projectId: firebaseConfig.projectId,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(
        /\\n/g,
        '\n'
      ),
    }),
  });
}