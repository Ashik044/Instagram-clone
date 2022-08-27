// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZptXWLYUd6x93RLQY5pZd9kvP721Mfo",
  authDomain: "instagram-clone-2480b.firebaseapp.com",
  projectId: "instagram-clone-2480b",
  storageBucket: "instagram-clone-2480b.appspot.com",
  messagingSenderId: "447650775845",
  appId: "1:447650775845:web:0ddec4f523f0d1910110cc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, storage };
export default db;
