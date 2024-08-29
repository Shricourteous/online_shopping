import SignupForm from '../../signup-form/signup-form.component'
import SignInForm from '../../signin-form/signin-form-component'
import './authentication.style.scss'


const Authentication = () => {
  return (
    
      <div className='authentication-container'>
        <SignInForm />
        <SignupForm />
      </div>
  )
}

export default Authentication