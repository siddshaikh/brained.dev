// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "ecom-6f157.firebaseapp.com",
  projectId: "ecom-6f157",
  storageBucket: "ecom-6f157.firebasestorage.app",
  messagingSenderId: "574778436864",
  appId: "1:574778436864:web:bf80f5405780d761c957e5",
  measurementId: "G-L3CC5KWFFE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
