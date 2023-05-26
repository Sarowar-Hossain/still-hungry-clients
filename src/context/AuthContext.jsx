import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const ContextProvider = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  // -------Google Sign In -----------//
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // -------GitHub Sign In -----------//
  const gitLogin = () => {
    return signInWithPopup(auth, gitProvider);
  };

  // -------Create User With Email and Password -----------//
  const passwordLogin = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // -------Sign In with Email and Password-----------//

  const emailPassLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // -------logout-----------//
  const userlogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // ------- One Change -----------//
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoader(false);
    });
    return () => unsubscribe();
  }, []);

  // ---------Change Password------//

  const updatePass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const data = {
    user,
    loader,
    googleLogin,
    setUser,
    gitLogin,
    passwordLogin,
    emailPassLogin,
    userlogOut,
    updatePass,
  };
  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  );
};

export default AuthContext;
