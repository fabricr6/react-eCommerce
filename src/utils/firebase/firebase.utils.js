import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3rFoabN7W3bEW4EiVvK4Z_P0uq9p47LM",
    authDomain: "crwn-clothing-db-5c8bd.firebaseapp.com",
    projectId: "crwn-clothing-db-5c8bd",
    storageBucket: "crwn-clothing-db-5c8bd.appspot.com",
    messagingSenderId: "716609889464",
    appId: "1:716609889464:web:55c3b1552643f80f38404d",
    measurementId: "G-E0RKQKC1S0"
    };
    

    const firebaseApp = initializeApp(firebaseConfig);

    const provider = new GoogleAuthProvider();
    
    provider.setCustomParameters({
      prompt: 'select_account',
    });
    

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
    