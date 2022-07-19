// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxSeWRo-e3KwTOZpNwsMS_o87JsqY0T5Y",
  authDomain: "mini-project-react-dts.firebaseapp.com",
  projectId: "mini-project-react-dts",
  storageBucket: "mini-project-react-dts.appspot.com",
  messagingSenderId: "359371242541",
  appId: "1:359371242541:web:c7799984fe690be3964ca4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {

  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
    
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      console.log("User yang berhasil login adalah", userCredential.user);
    } catch (err) {
      console.log(err);
      console.log("error code auth", err.code);
      console.log("error message auth", err.message);
    }
  };
  
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
  
      console.log("Password reset sudah dikirimkan");
    } catch (err) {
      console.log(err);
    }
  };
  

  const logoutFromApps = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  export {
    auth,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    resetPassword,
    logoutFromApps,
  };