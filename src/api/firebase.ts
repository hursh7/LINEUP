/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function UserStateChange(callback: {
  (value: any): void;
  (arg0: void | { uid: string } | null): void;
}) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : user;
    callback(updatedUser);
  });
}

async function adminUser(user: { uid: string }) {
  return get(ref(database, 'admins')) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    })
    .catch(error => {
      console.error(error);
    });
}
export async function addNewProduct(product: any, imageUrl: string) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.split(','),
  });
}
