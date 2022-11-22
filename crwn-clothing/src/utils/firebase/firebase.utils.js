import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtRSwN5djjkuDIRIFUm5VUGQbVLw8vJD8",
  authDomain: "crwn-clothing-db-86ab4.firebaseapp.com",
  projectId: "crwn-clothing-db-86ab4",
  storageBucket: "crwn-clothing-db-86ab4.appspot.com",
  messagingSenderId: "113394899901",
  appId: "1:113394899901:web:3d6111c3d171958cb2d0d4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account',});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
