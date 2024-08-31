// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-21774.firebaseapp.com",
  projectId: "mern-estate-21774",
  storageBucket: "mern-estate-21774.appspot.com",
  messagingSenderId: "739767980003",
  appId: "1:739767980003:web:b077b6058432e601fc9ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage(); // Ensure proper language settings
