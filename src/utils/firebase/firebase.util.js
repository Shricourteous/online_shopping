// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getAuth,  GoogleAuthProvider ,  signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

/********************* Establish/Setup the DB conn ******************************/
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAANUOKZyJzbd0pF9rrU9rSSG6nlF-EVU4",
  authDomain: "crwn-shopping-30106.firebaseapp.com",
  projectId: "crwn-shopping-30106",
  storageBucket: "crwn-shopping-30106.appspot.com",
  messagingSenderId: "651870853075",
  appId: "1:651870853075:web:84e2aa8a13435d1b15c126",
  measurementId: "G-B58TNHNMVW"
};

// Initialize Firebase and points to the our database
const dbFireStoreapp = initializeApp(firebaseConfig);


/********************* Preparing Google for Auth ******************************/
const provider = new GoogleAuthProvider();
// Forces the user to signup/select account
provider.setCustomParameters({
  prompt: "select_account"
})

// return the auth instance from provider - Authetication communication bridge
export const auth = getAuth();

// to prompt the Google Signin when it is called
export const SigninWithGooglePopup = () => signInWithPopup(auth, provider);


/********************* FIRESTORE ******************************/
// points to firestore (get local access)
export const db = getFirestore();





/********************* FIRESTORE METHODS ******************************/

/*
 *  createUserDocumentFromAuth = crete the document in firestore
 */
export const createUserDocumentFromAuth = async (userAuthentication, additionalInfo= {} )=> {
    const userDocRef = doc(db, "users", userAuthentication.uid );
    // console.log({userDocRef})
    const snapShotDoc = await getDoc(userDocRef);
    // console.log({snapshot:snapShotDoc.exists()})

    if(!snapShotDoc.exists()){
      console.log("Pushing user data to fireStore")
      const {displayName, email} = userAuthentication;
      const createdAt = new Date();

      try {
        setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo
        })
      } catch (error) {
        console.log(error)
      }
    }
  }





/**
 *  Helper functions =>  
 */
export const createUserAuthWithEmailandPassword = async(email, password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signAuthWithEmailandPassword = async(email, password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() =>{
  await signOut(auth);
  console.log("Signed out... ")
}

export const authStateChangeListener = (callBack) => onAuthStateChanged(auth, callBack);