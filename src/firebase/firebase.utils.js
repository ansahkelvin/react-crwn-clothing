import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBY7LHf8kGb7jUxBvgkQsYhXskzYGfgqVM",
    authDomain: "react-crwn-clothing-f770a.firebaseapp.com",
    projectId: "react-crwn-clothing-f770a",
    storageBucket: "react-crwn-clothing-f770a.appspot.com",
    messagingSenderId: "120007430815",
    appId: "1:120007430815:web:7052cce72c201e64ef08aa",
    measurementId: "G-1C193D2S20",
};

const app = firebase.initializeApp(config);
export const analytics = getAnalytics(app);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;