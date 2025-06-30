import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the following with your Firebase project config:
const firebaseConfig = {
  apiKey: "AIzaSyBh0bzJtiRWNi-yygHULObb8j0G899asIw",
  authDomain: "chat-app-auth-6f41a.firebaseapp.com",
  projectId: "chat-app-auth-6f41a",
  storageBucket: "chat-app-auth-6f41a.firebasestorage.app",
  messagingSenderId: "505673403644",
  appId: "1:505673403644:web:4f2f00ee5e9563a5fa5b79"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const imgDB = getStorage(app);  


