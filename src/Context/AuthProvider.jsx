import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Authentication/firebase.init";
import axios from "axios";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [errorInvalid, setErrorInvalid] = useState("");

  // register New user with email passowrd
  const registerNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile

  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  // login user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login user with Google Login

  const googleLoginUser = () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // log out user

  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if(currentUser?.email){
        setUser(currentUser);
     const {data} = await axios.post(`${import.meta.env.VITE_API}/jwt` , {email : currentUser?.email},{withCredentials:true})
   
      }else{
        setUser(currentUser)
        const {data} = await axios.get(`${import.meta.env.VITE_API}/logOut` , {withCredentials : true})
      
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loginUser,
    setLoading,
    loading,
    setUser,
    user,
    googleLoginUser,
    registerNewUser,
    logOutUser,
    updateUserProfile,
    errorInvalid,
    setErrorInvalid,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
