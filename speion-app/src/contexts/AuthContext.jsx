import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Load profile from localStorage (mock for Postgres)
        const savedProfile = localStorage.getItem(`profile_${firebaseUser.uid}`);
        if (savedProfile) {
          setProfile(JSON.parse(savedProfile));
        } else {
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const saveProfile = (profileData) => {
    if (user) {
      localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profileData));
      setProfile(profileData);
    }
  };

  const hasProfile = Boolean(profile);
  const isVerified = user?.emailVerified || false;

  const value = {
    user,
    loading,
    profile,
    hasProfile,
    isVerified,
    saveProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
