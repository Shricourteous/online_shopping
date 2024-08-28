// Import the functions you need from the SDKs you need
import { initializeApp,  } from "firebase/app";
import { getAuth,  GoogleAuthProvider ,  signInWithPopup, signInWithRedirect} from "firebase/auth";
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

export const SignWithGoogleRedirect = () => signInWithRedirect(auth, provider);



/********************* FIRESTORE ******************************/
// points to firestore (get local access)
export const db = getFirestore();


/********************* Document ******************************/
// creates the user entry(insert row) to the db in the Users Document

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid );
    // console.log({userDocRef})
    const snapShotDoc = await getDoc(userDocRef);
    console.log({snapshot:snapShotDoc.exists()})

    if(!snapShotDoc.exists()){
      console.log("Pusging user data")
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      } catch (error) {
        console.log(error)
      }
    }


  }
 