// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDrpZA-xInNbQT2eZZwFNEhjfntCjR4cW8",
  authDomain: "clone-a53fc.firebaseapp.com",
  projectId: "clone-a53fc",
  storageBucket: "clone-a53fc.appspot.com",
  messagingSenderId: "212698233484",
  appId: "1:212698233484:web:4f1f5fe3b78661391099a9",
  measurementId: "G-DWL9ZRER0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();


