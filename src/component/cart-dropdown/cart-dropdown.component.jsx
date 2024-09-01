import React, { useContext } from 'react'
import Button from '../button/button-component'
import "./cart-dropdown.style.scss"
import CartItem from "../cart-item/cart-item.component"
import { CartContext } from '../../context/cart-context'
import { Link } from 'react-router-dom'


const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)

  // const cartItems = [{name:"product"}, {name:"product"}, {name:"product"}]
  console.log(cartItems)
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {
            cartItems.map((cartItem)=>{
              // return <div >{cartItem.name}</div>
              return <CartItem key={cartItem.id} cartItem={cartItem}/>

            })

          }
        </div>
        <Link to="/checkout">
          <Button buttonType="inverted"> CHECKOUT </Button>
        </Link>
    </div>
  )
}

export default CartDropDown