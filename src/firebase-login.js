import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your firebase config
  apiKey: "AIzaSyCQZaDOER4qfdQQeXCM_vPFn3b-QkI6sYk",
  authDomain: "ass2-418418.firebaseapp.com",
  projectId: "ass2-418418",
  storageBucket: "ass2-418418.appspot.com",
  messagingSenderId: "551540901848",
  appId: "1:551540901848:web:ea28dbb198add25eead4ad",
  measurementId: "G-W6EGCMG8TC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export { auth, db };
