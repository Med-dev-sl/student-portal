// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwAXP5H5LaPlYusq9X_kubo8h2Jpn22t0",
  authDomain: "student-portal-5a512.firebaseapp.com",
  projectId: "student-portal-5a512",
  storageBucket: "student-portal-5a512.firebasestorage.app",
  messagingSenderId: "828376994786",
  appId: "1:828376994786:web:400fc898ffb81b7e391fbb",
  measurementId: "G-6HG8YWN35Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
