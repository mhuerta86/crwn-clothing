import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyXmR46MHpfiMw0vB6qmeWxk_SOWxrXRQ",
    authDomain: "crwn-db-d6608.firebaseapp.com",
    databaseURL: "https://crwn-db-d6608.firebaseio.com",
    projectId: "crwn-db-d6608",
    storageBucket: "crwn-db-d6608.appspot.com",
    messagingSenderId: "44399843124",
    appId: "1:44399843124:web:2983027c12f8089481f761"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



