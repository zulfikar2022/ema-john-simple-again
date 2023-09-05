// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ7y1jSTHd-T5fWQKD8B5Nhm4zeLwhEIQ",
  authDomain: "ema-john-with-firebase-be6b4.firebaseapp.com",
  projectId: "ema-john-with-firebase-be6b4",
  storageBucket: "ema-john-with-firebase-be6b4.appspot.com",
  messagingSenderId: "446554676997",
  appId: "1:446554676997:web:1ca0af1c2406d5ee75616c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;