import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoZ7j_6NfVESi9yBrB1k2E9zG2D2sNUQI",
  authDomain: "auth-firestore-939d0.firebaseapp.com",
  projectId: "auth-firestore-939d0",
  storageBucket: "auth-firestore-939d0.firebasestorage.app",
  messagingSenderId: "524595479700",
  appId: "1:524595479700:web:d4ee9be5d682675de5a081"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()