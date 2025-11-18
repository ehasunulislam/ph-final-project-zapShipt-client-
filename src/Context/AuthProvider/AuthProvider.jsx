import React from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // registration user
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    registerUser,
    LoginUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
