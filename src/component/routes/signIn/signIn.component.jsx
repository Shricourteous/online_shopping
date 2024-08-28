import  {useEffect} from 'react'
import { 
  SigninWithGooglePopup ,
  SignWithGoogleRedirect, 
  createUserDocumentFromAuth, 
  auth
   } from '../../../utils/firebase/firebase.util'

import { getRedirectResult, getAuth } from 'firebase/auth'

const SignIn = () => {

// without error modified actual
  useEffect(() => {
    const fetchRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      console.log("result response: ")
      console.log(response);
    };
    
    fetchRedirectResult();
  }, []);

  // chatgpt: 
  // useEffect(() => {
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       if (result) {
  //         // User signed in successfully.
  //         console.log("Redirect Result:", result);
  //       } else {
  //         console.log("No redirect has occurred or the result is null");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching redirect result:", error);
  //     });
  // }, []);

  //Actual :
  // useEffect( async() => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  // }, []);
  
  const logGoogleRedirectUser = async() =>{
    // Authentication Backend
    const {user} = await SignWithGoogleRedirect()
    console.log({user})
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
    
  }


  const logGoogleUser = async() =>{
    // Authentication Backend
    const {user} = await SigninWithGooglePopup()
    console.log({user})
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }

  return (
    <div>
      <button onClick={logGoogleUser}>Sign In Button</button>
      <button onClick={logGoogleRedirectUser}>Sign In with redirect Button</button>
      </div>
  )
}

export default SignIn