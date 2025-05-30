// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1TMrbuZbwqZOBY99BDGDejuzfl6-H8NQ",
  authDomain: "my-project-c4481.firebaseapp.com",
  projectId: "my-project-c4481",
  storageBucket: "my-project-c4481.firebasestorage.app",
  messagingSenderId: "328622163668",
  appId: "1:328622163668:web:018f079f9a521b4d071d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

const db = getFirestore()

export {db}