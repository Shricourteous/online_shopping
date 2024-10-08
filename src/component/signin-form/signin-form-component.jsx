import React, {  useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button-component'

import { SigninWithGooglePopup } from '../../utils/firebase/firebase.util'
import { createUserDocumentFromAuth , signAuthWithEmailandPassword} from '../../utils/firebase/firebase.util'

import './signin-form.style.scss'

const defaultField = {
    email: "",
    password: ""
}


const SignInForm = () => {
    
    // attributes declaration
    const [formField, setformField] = useState(defaultField)
    const { email, password } = formField;
    

    // Authentication Backend with GOogle popup
    const logGoogleUser = async () => {
        const { user } = await SigninWithGooglePopup()
        // console.log({user}) user contains uid 
        // await createUserDocumentFromAuth(user) // ==> moved to user-context > contextProvider >UseEffect
    }

    const [error, setError] = useState(null);

    const changeHandler = (event) => {
        const { name, value } = event.target
        setformField({ ...formField, [name]: value })
    }
    const submitHandler = async(event) => {
        try {
            console.log("Sigining in...", email, password)
            event.preventDefault();
            const {user} = await signAuthWithEmailandPassword(email, password)
            
        } catch (error) {
            if(error.code == "auth/invalid-credential"){
                alert("Wrong email or password")
            }
            setError(`Unhandled error: ${error.message}`);
            window.location.reload();
        }
    }

    return (
        <div className='sign-in-component'>
            <h2>Sign In</h2>
            <span>Exsiting User?</span>
            <form onSubmit={submitHandler}>
                <FormInput label="Email" name="email" value={email} type="text" onChange={changeHandler} />
                <FormInput label="Password" name="password" value={password} type="password" onChange={changeHandler} />
                <div className='buttons-container'>
                    <Button buttonType={"submit"}>Log In</Button>
                    <Button type="button" onClick={logGoogleUser} buttonType={"google"}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm