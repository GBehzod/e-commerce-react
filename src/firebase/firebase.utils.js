// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB151zVt_owJ99SQ9w5NfaD7lEONfdw8WQ",
    authDomain: "crwn-db-2916b.firebaseapp.com",
    projectId: "crwn-db-2916b",
    storageBucket: "crwn-db-2916b.appspot.com",
    messagingSenderId: "761243373909",
    appId: "1:761243373909:web:b31f9cbdfb5639bc4b9fdc",
    measurementId: "G-83H0ZBNWCE"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth()
export const firestore = getFirestore()

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider);