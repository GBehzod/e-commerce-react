import {initializeApp} from "firebase/app";
import {getFirestore, setDoc, getDoc, doc, collection} from "firebase/firestore";
import {GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB151zVt_owJ99SQ9w5NfaD7lEONfdw8WQ",
    authDomain: "crwn-db-2916b.firebaseapp.com",
    projectId: "crwn-db-2916b",
    storageBucket: "crwn-db-2916b.appspot.com",
    messagingSenderId: "761243373909",
    appId: "1:761243373909:web:b31f9cbdfb5639bc4b9fdc",
    measurementId: "G-83H0ZBNWCE"
};

initializeApp(firebaseConfig);

export const auth = getAuth()
export const firestore = getFirestore()


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestore, 'users', userAuth.uid);

    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc((userRef), {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider);