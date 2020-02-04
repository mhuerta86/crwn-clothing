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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



