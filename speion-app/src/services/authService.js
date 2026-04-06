import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase';

export const signUp = async (email, password, displayName) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName });
  await sendEmailVerification(result.user);
  return result.user;
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};

export const sendVerification = () => {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser);
  }
  throw new Error('No user is currently signed in.');
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
