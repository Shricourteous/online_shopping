import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/cart-context'
import "./productItem.style.scss"
const ProductItem = ({imageUrl, name, price , id, quantity}) => {

const {decreaseQuantity,increaseQuantity, removeFromCart, cartItems} = useContext(CartContext)


useEffect(()=>{

  }, [cartItems])
  
  return (<>
    
    <div key={id} className='item-container'>
        <img src={imageUrl} alt="Product Image" />
        <div className='item-details'>
            <p>{name}</p>
            <p> 
                <span onClick={()=>{decreaseQuantity(id)}}> &#10094; </span>
                 {quantity}
                 <span onClick={()=>{increaseQuantity(id)}}> &#10095; </span>
            </p>
            <p>{price}</p>
            <p onClick={()=>{removeFromCart(id)}}> &#10005; </p>
        </div>
    </div>
        <hr className='split-line' />
    </>
)
}

export default ProductItem