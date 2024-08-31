import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Crownx} from "../../assets/crown.svg"
import "./navbar.style.scss"
import { Fragment } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/user-context'
import { signOutUser } from '../../utils/firebase/firebase.util'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const NavigationBar = () => {
  const [dropDownState, setdropDownState] = useState(false);
  const {currentUser} = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser()
  }

  const dropDownHandler = () => {
    setdropDownState( !dropDownState)
  }

    return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to="/">
                <div className='logo'>
                    <Crownx/>
                </div>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to="/shop">
                    Shop Now
                </Link>

                {currentUser ?
                (<span className='nav-link' onClick={signOutHandler}>Sign Out</span>):
                (<Link className='nav-link' to="/auth">
                    Sign In
                </Link>)
                }

                <CartIcon dropDownHandler={dropDownHandler}/>
                
            </div>
            { dropDownState && (
              <CartDropDown/>
            )}
        </div>
            <Outlet/>
    </Fragment>
      )
}

export default NavigationBar