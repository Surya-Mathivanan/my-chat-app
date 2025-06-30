import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace the following with your Firebase project config:
const firebaseConfig = {
  apiKey: "AIzaSyCP8kvMcMiu2GYA8EtuOTg0vYyFqKy1Bag",
  authDomain: "authendicationform.firebaseapp.com",
  projectId: "authendicationform",
  storageBucket: "authendicationform.firebasestorage.app",
  messagingSenderId: "689964611295",
  appId: "1:689964611295:web:d36a0d526d086712e75b6a"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const imgDB = getStorage(app);  


