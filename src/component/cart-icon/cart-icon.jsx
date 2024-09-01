import React, { useContext, useEffect, useState } from 'react'
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import { CartContext } from '../../context/cart-context'

const CartIcon = ({dropDownHandler}) => {

  const [itemCount, setitemCount] = useState(0)

  const {cartItems} = useContext(CartContext)
  
  let count = cartItems.reduce((total, eachItem)=> eachItem.quantity+ total, 0)
  useEffect(()=>{
    setitemCount(count)
  }, [count])
  // const count = 0
  
  return (
    <div className='cart-icon-container' onClick={()=>{dropDownHandler()}}>
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>{count}</span>
    </div>

  )
}

export default CartIcon