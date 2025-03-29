// Import the functions you need from the SDKs you need
import { initializeApp,getApp ,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0L17jFzLbaemP0Vf88cGNUd4WjM8JC8M",
  authDomain: "interview-one-a290b.firebaseapp.com",
  databaseURL: "https://interview-one-a290b-default-rtdb.firebaseio.com",
  projectId: "interview-one-a290b",
  storageBucket: "interview-one-a290b.firebasestorage.app",
  messagingSenderId: "287037958389",
  appId: "1:287037958389:web:1c8318e68cb29ecee1fdbc",
  measurementId: "G-DGBYT7W82Y"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);