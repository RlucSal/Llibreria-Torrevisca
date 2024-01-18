// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-lyWLREfLPJtUCB0_0b-SmnAWOULfX0E",
  authDomain: "llibreria-torrevisa.firebaseapp.com",
  projectId: "llibreria-torrevisa",
  storageBucket: "llibreria-torrevisa.appspot.com",
  messagingSenderId: "871753562053",
  appId: "1:871753562053:web:50a567c579fa9dbcf93dac",
  measurementId: "G-Q192V7BWSC",
  databaseURL: "https://llibreria-torrevisa-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const database = getDatabase(app);

export { auth, db }; // Export auth and db for use in other files
