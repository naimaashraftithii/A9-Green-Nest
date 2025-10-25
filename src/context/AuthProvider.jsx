// AuthProvider.jsx
import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const DEFAULT_AVATAR = "https://i.ibb.co.com/xSs47HzW/eaccd7bf07e314e993b3604518b9deae.jpg";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auth API wrappers
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);
  const updateUser = (displayName, photoURL) =>
    updateProfile(auth.currentUser, { displayName, photoURL });

  // ✅ Helper to ensure user has a photoURL
  const ensureUserPhoto = async (u) => {
    try {
      if (u && !u.photoURL) {
        await updateProfile(u, { photoURL: DEFAULT_AVATAR });
        // reload local state so UI gets the new photo
        setUser({ ...u, photoURL: DEFAULT_AVATAR });
      }
    } catch {
      // swallow — not critical
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u || null);
      if (u) await ensureUserPhoto(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = {
    user, loading, setLoading,
    signup, login, googleLogin, logout, resetPassword, updateUser, setUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
