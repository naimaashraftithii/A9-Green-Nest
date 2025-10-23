// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRSYOWuKyiKKCsgo3Wgt8ZKWEBKfQUl08",
  authDomain: "a9-green-net.firebaseapp.com",
  projectId: "a9-green-net",
  storageBucket: "a9-green-net.firebasestorage.app",
  messagingSenderId: "966496572199",
  appId: "1:966496572199:web:9bca9fda1d3f4437e38f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);