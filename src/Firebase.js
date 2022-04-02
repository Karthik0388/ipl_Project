import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBY2BOUB4q0b_BHyc6sN4H9KE43bHHkJp4",
  authDomain: "ipl-clone.firebaseapp.com",
  projectId: "ipl-clone",
  storageBucket: "ipl-clone.appspot.com",
  messagingSenderId: "960529306543",
  appId: "1:960529306543:web:b1b75fd95a959a3e96955a",
  measurementId: "G-FP9P5TK2R7",
};

// Initialize Firebase
let firebaseApp = initializeApp(firebaseConfig);
let db = getFirestore(firebaseApp);
let auth = getAuth(firebaseApp);

export { db, auth };
