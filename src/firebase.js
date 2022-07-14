// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiCTNxlH-u7l48pyYCoqsi2ABZRoIyITo",
  authDomain: "jumia-db.firebaseapp.com",
  databaseURL:
    "https://jumia-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jumia-db",
  storageBucket: "jumia-db.appspot.com",
  messagingSenderId: "567754490733",
  appId: "1:567754490733:web:bdc0cd0f4ab4d09945d064",
  measurementId: "G-MME4ZX2Y12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const analytics = getAnalytics(app);
