import React from 'react'
import "./cart-item.style.scss"

const CartItem = ({ cartItem }) => {

  const { name, imageUrl, quantity, price } = cartItem
  console.log(imageUrl)
  const total = quantity*price
  return (
    <div className='cart-item-container '>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <h2 className='name'>{name}</h2>
        <div className='price-container'>
          <span>{quantity} X {price} = {total}</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem