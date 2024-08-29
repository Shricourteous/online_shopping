import React, { useState } from 'react'
import { createUserAuthWithEmailandPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button-component';
import './signup.style.scss'


const SignupForm = () => {


  const formData = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [formField, setformField] = useState(formData);
  const { displayName, email, password, confirmPassword } = formField;
  // console.log(formField);  //test input

  /** AIM
   *  Password check, 
   * Create User, -  createUserAuthWithEmailandPassword => user = {uid ..]  purpose: Creating New User
   * Create Doc, - createUserDocumentFromAuth({user})  purpose: push the user object to firestore
   * Handle Errors - mail Already used
   * Reset formfield data after Succeeful Signup
   * */
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(password, confirmPassword, password != confirmPassword) // pass Verification

    if (password != confirmPassword) {
      alert("Password does not  match")
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailandPassword(email, password);
      // console.log("user Authorization replay", {user});  // push new user to Authentication 

      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();
    }
    catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Mail Id already in use")
      }
      console.log("An error encountered in user creation", error)
    }
  }

  // purpose: sync internal formfields with corresponding html inputs
  //   UseEffects not needed since seting value params in input field does internally
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setformField({ ...formField, [name]: value })
  }

  // purpose: Reset dataField after succeeful submission
  const resetFormFields = () => {
    setformField(formData);
  }

  return (
    <div className='sign-up-component'>
      <h2>Sign Up</h2>
      <span>Dont you have an Account?</span>
      <form onSubmit={handleSubmit}>

        <FormInput label= "Display Names" type="text" name='displayName' value={displayName} onChange={changeHandler} />

        <FormInput label="Email" type="email" name='email' value={email} onChange={changeHandler} />

        
        <FormInput label="Password" type="password" name='password' value={password} onChange={changeHandler} />

        <FormInput label="Confirm Password" type="password" name='confirmPassword' value={confirmPassword} onChange={changeHandler} />

        <Button type="submit" buttonType={"inverted"}>Sign up</Button>
        
        
      </form>


    </div>
  )
}

export default SignupForm