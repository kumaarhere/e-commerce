// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCetcuHqP-rIgOQj-_aTGd5edYtoe600hk",
  authDomain: "login-auth-eb91b.firebaseapp.com",
  projectId: "login-auth-eb91b",
  storageBucket: "login-auth-eb91b.appspot.com",
  messagingSenderId: "885761398178",
  appId: "1:885761398178:web:3de17ce39cfc2d650b0efb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
