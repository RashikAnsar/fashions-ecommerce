import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBcOmBbEFKN4Pi6aQ8g1LUHcbrM1V5sp-0",
    authDomain: "crwn-fashions.firebaseapp.com",
    databaseURL: "https://crwn-fashions.firebaseio.com",
    projectId: "crwn-fashions",
    storageBucket: "",
    messagingSenderId: "433313336900",
    appId: "1:433313336900:web:2f3cb6dbabe8566acb7611"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
