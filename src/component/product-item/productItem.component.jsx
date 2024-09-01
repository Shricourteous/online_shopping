import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/cart-context'
import "./productItem.style.scss"
const ProductItem = ({imageUrl, name, price , id, quantity}) => {

const {decreaseQuantity,increaseQuantity, removeFromCart, cartItems} = useContext(CartContext)
  
useEffect(()=>{

  }, [cartItems])
  
  return (<>
    <hr className='split-line' />
    <div key={id} className='item-container'>
        
        <img src={imageUrl} alt="Product Image" />
        <div className='item-details'>
            <p>{name}</p>
            <p> 
                <span onClick={()=>{decreaseQuantity(id)}}> {" < "} </span>
                 {quantity}
                 <span onClick={()=>{increaseQuantity(id)}}> {" > "} </span>
            </p>
            <p>{price}</p>
            <p onClick={()=>{removeFromCart(id)}}>{"X"}</p>
        </div>
    </div>
    </>
)
}

export default ProductItem