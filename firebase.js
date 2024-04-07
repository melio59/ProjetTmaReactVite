// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq48yJsINIziTYU-N_Oo-k3bBhBZqrFzU",
  authDomain: "tmaauthentification.firebaseapp.com",
  projectId: "tmaauthentification",
  storageBucket: "tmaauthentification.appspot.com",
  messagingSenderId: "737942911431",
  appId: "1:737942911431:web:67f486131bc362a79f41e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };