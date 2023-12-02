import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  //   create a user based on google sign in

  const createUserOnGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  //   create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   update a profile
  const updateUserProfile = (name, photoUrl) => {
    setLoading(true);
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };
  useEffect(() => {
    const clearMemory = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no user We have");
      }
      //   console.log(currentUser.photoURL);
      setUser(currentUser);
      setLoading(false);
    });
    return () => clearMemory();
  }, []);
  const AuthValue = {
    user,
    loading,
    createUserOnGoogle,
    createUser,
    logIn,
    updateUserProfile,
    logOut,
  };
  return (
    <AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
  );
}
