import React from 'react'
import Button from '../button/button-component'
import "./cart-dropdown.style.scss"


const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
        <p>Product item</p>
        <p>Product item</p>
        <p>Product item</p>
        <p>Product item</p>
        <p>Product item</p>
        <p>Product item</p>
        </div>
        <Button buttonType="inverted"> CHECKOUT </Button>
    </div>
  )
}

export default CartDropDown