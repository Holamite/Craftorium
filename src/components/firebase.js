// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "craftorium-ceb22.firebaseapp.com",
  projectId: "craftorium-ceb22",
  storageBucket: "craftorium-ceb22.appspot.com",
  messagingSenderId: "80668895671",
  appId: "1:80668895671:web:8f9c05063fe1ebcf9ea032",
  measurementId: "G-5MC0VR2W7J",
};

// console.log("API Key:", process.env.NEXT_PUBLIC_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
