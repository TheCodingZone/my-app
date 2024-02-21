

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrU0adiHLd3b5nYrqvi5o_d7eaBcWolu8",
  authDomain: "newswebsite-dce6a.firebaseapp.com",
  projectId: "newswebsite-dce6a",
  storageBucket: "newswebsite-dce6a.appspot.com",
  messagingSenderId: "162046728515",
  appId: "1:162046728515:web:76e1b54665ad4c93dcf7f6",
  measurementId: "G-QQ38TZXT54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth();
 export {app,auth}