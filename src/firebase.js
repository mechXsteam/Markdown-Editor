import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZM897iKEfBA-LVBVy9ni043OCmTKutUQ",
  authDomain: "react-markdown-app-d5356.firebaseapp.com",
  projectId: "react-markdown-app-d5356",
  storageBucket: "react-markdown-app-d5356.appspot.com",
  messagingSenderId: "736944227150",
  appId: "1:736944227150:web:c4b998423ab0508765141f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
