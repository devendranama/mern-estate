// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-21774.firebaseapp.com",
  projectId: "mern-estate-21774",
  storageBucket: "mern-estate-21774.appspot.com",
  messagingSenderId: "739767980003",
  appId: "1:739767980003:web:b077b6058432e601fc9ad6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);