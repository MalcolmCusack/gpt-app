import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5tbTMrAAfQIaM2be-obFck-YG8VhpskE",
  authDomain: "gpt-app-ad1bd.firebaseapp.com",
  projectId: "gpt-app-ad1bd",
  storageBucket: "gpt-app-ad1bd.appspot.com",
  messagingSenderId: "978203579849",
  appId: "1:978203579849:web:f665adf78fd6f989f5c418",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
