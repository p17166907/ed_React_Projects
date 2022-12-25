import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,} from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore'

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
console.log('firebaseAp._options',firebaseApp._options);

const provider = new GoogleAuthProvider();
// provider.setCustomParameters() Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in operations.
provider.setCustomParameters({prompt: 'select_account',});

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
  if (!userAuth) return;
  console.log('userAuth',userAuth);
};

// Returns the Auth instance associated with the provided @firebase/app#FirebaseApp.
//If no instance exists, initializes an Auth instance with platform-specific default dependencies.
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Returns the existing Firestore instance that is associated 
//with the provided @firebase/app#FirebaseApp. 
//If no instance exists, initializes a new instance with default settings
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>
{

  console.log('userAuth', userAuth);

  const userDocRef = doc(db, 'users',  userAuth.uid)
  console.log('userDocRef', userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log('userSnapshot',userSnapshot);
  console.log('userSnapshot.exists()',userSnapshot.exists());

  if (!userSnapshot.exists())
  {
    const {displayName, email, emailVerified, metadata} = userAuth
    console.log(displayName, email + ' ' + 'emailVerified:' + emailVerified, metadata);

    const createdAt = new Date()

    try
    {
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) 
    {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef

}

