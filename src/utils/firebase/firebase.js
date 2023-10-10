import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword as createUserWithEmailAndPasswordFirebase,
    signInWithEmailAndPassword,
    } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ddpvkxjxnAID2fOmO9wH9B67tqraV8k",
  authDomain: "capston-clothing-be58f.firebaseapp.com",
  projectId: "capston-clothing-be58f",
  storageBucket: "capston-clothing-be58f.appspot.com",
  messagingSenderId: "579201670025",
  appId: "1:579201670025:web:7e2934466e60afd5cc9f58"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'user', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists) {
      // Extract displayName and email properties
      const displayName = userAuth.displayName || '';
      const email = userAuth.email || '';
      
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo,
        });
  
      } catch (error) {
        console.error('Error creating user', error.message);
      }
  
      return userDocRef;
    }
  };

    


    export const createUserWithEmailAndPassword = async (email,password) => {
        if(!email || !password) return;
          return await createUserWithEmailAndPasswordFirebase(auth, email, password)
    }

    export const signInAuthUserWithEmailAndPassword = async (email,password) => {
      if(!email || !password) return;
        return await signInWithEmailAndPassword(auth, email, password)
  }
