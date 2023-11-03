// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuqtKbCmQbruvemwjM8wxcpwQJy8HDBek",
    authDomain: "nicoticias.firebaseapp.com",
    projectId: "nicoticias",
    storageBucket: "nicoticias.appspot.com",
    messagingSenderId: "46461894633",
    appId: "1:46461894633:web:04cb22514c26506d5f1578",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
