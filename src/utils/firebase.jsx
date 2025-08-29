// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixgpt-b8111.firebaseapp.com",
  projectId: "netflixgpt-b8111",
  storageBucket: "netflixgpt-b8111.firebasestorage.app",
  messagingSenderId: "551527545912",
  appId: "1:551527545912:web:298143d168cb77fd96facd",
  measurementId: "G-GZ6FZNVE6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();