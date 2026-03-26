import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDM_uOmbv--_VyfvbSCPItTVwevToPnouE",
  authDomain: "speion.firebaseapp.com",
  projectId: "speion",
  storageBucket: "speion.firebasestorage.app",
  messagingSenderId: "186157714696",
  appId: "1:186157714696:web:c0548ed21fc1ab1b9ab0bd",
  measurementId: "G-YS2V5QB40F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
