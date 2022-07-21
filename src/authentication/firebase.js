// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACJm2ciwe-nJHjgvpAqnm1bU1MKsQDVOg",
  authDomain: "miniprojectdts.firebaseapp.com",
  projectId: "miniprojectdts",
  storageBucket: "miniprojectdts.appspot.com",
  messagingSenderId: "479940525215",
  appId: "1:479940525215:web:d506f4a8d422729f4e76aa",
  measurementId: "G-X8NX99CKRQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};