// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmo048jgLVKtpllNB_wtJFik5YYmwfor4",
  authDomain: "up-skilling-1499b.firebaseapp.com",
  projectId: "up-skilling-1499b",
  storageBucket: "up-skilling-1499b.appspot.com",
  messagingSenderId: "473960878479",
  appId: "1:473960878479:web:368d1c19ca0f623dc47bfa",
  databaseURL : "https://up-skilling-1499b-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);