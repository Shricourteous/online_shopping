import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Crownx} from "../../assets/crown.svg"
import "./navbar.style.scss"
import { Fragment } from 'react'


const NavigationBar = () => {
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
                <Link className='nav-link' to="/signin">
                    Sign In
                </Link>
            </div>
        </div>
            <Outlet/>
    </Fragment>
      )
}

export default NavigationBar