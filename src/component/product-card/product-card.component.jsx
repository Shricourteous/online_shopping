import React, { useContext } from 'react'
import Button from '../button/button-component'
import './product-card.style.scss'
import { CartContext } from '../../context/cart-context'

const ProductCard = ({product}) => {
    // console.log(product)
  const {addToCart} = useContext(CartContext)

  const addProductToCart = ()=> addToCart(product)
  const {name, imageUrl,price} = product
    return ( 
    <div className='product-card-container' >
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}> Add to cart </Button>
    </div>
  )
}

export default ProductCard