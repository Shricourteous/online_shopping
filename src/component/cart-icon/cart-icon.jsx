import React from 'react'
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'

const CartIcon = ({dropDownHandler}) => {

  return (
    <div className='cart-icon-container' onClick={()=>{dropDownHandler()}}>
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>

  )
}

export default CartIcon