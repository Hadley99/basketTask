// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMCllas4ub4DXgbvUTH1cmgwMhuPdNmMk",
  authDomain: "product-task-10303.firebaseapp.com",
  projectId: "product-task-10303",
  storageBucket: "product-task-10303.appspot.com",
  messagingSenderId: "585824976999",
  appId: "1:585824976999:web:ef12d17182500f4bafd4c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
