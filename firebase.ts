// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqd5N8Yf7LDiO5Qb9RjTIxU_LG71e4oCo",
  authDomain: "travophila-next.firebaseapp.com",
  projectId: "travophila-next",
  storageBucket: "travophila-next.appspot.com",
  messagingSenderId: "300141606700",
  appId: "1:300141606700:web:7e643ec9418a4578349e89"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
