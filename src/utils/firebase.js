// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAea9JqtxV2kfRWo_YqfzvnzrEey0Oy4G4",
  authDomain: "netflix-75d8f.firebaseapp.com",
  projectId: "netflix-75d8f",
  storageBucket: "netflix-75d8f.appspot.com",
  messagingSenderId: "909008394234",
  appId: "1:909008394234:web:04695cfcb5accbf02db643",
  measurementId: "G-XD3HL3NVVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
