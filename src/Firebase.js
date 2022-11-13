// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ0cBZwFpQb4oLOqVdtQlan60vq4_lYLc",
  authDomain: "bogglegame-a016a.firebaseapp.com",
  projectId: "bogglegame-a016a",
  storageBucket: "bogglegame-a016a.appspot.com",
  messagingSenderId: "115775807851",
  appId: "1:115775807851:web:95756d733b6c0213d72c2e",
  measurementId: "G-EY6DRZYZGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const signInWithGoogle = () => {
	const provider = new GoogleAuthProvider();
	signInWithPopup(auth, provider)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
};