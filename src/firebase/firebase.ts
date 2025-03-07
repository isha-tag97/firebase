// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjC_wcdngVfw3vxe_vXkt5pfmalYBrask",
  authDomain: "student-b4417.firebaseapp.com",
  projectId: "student-b4417",
  storageBucket: "student-b4417.firebasestorage.app",
  messagingSenderId: "889065866012",
  appId: "1:889065866012:web:d86dd2ec54d382718470d9",
  measurementId: "G-XPMRR3WB8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { collection, db, doc, getDocs };

