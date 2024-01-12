// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDda45jF1sY4Jn6uG9_LX1BC1yfSrkyDGs",
  authDomain: "react-49930.firebaseapp.com",
  projectId: "react-49930",
  storageBucket: "react-49930.appspot.com",
  messagingSenderId: "474901029669",
  appId: "1:474901029669:web:00639736c3dd6616a7b0cc",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
