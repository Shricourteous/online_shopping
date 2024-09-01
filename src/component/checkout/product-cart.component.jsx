import React, { useContext } from 'react'
import { CartContext } from '../../context/cart-context'
import "./product-cart.style.scss"
import ProductItem from '../product-item/productItem.component'


const ProductCartItems = () => {

    const {cartItems} = useContext(CartContext)

    return (
            cartItems.map((eachItem) =>(
            <ProductItem key={eachItem.id} {...eachItem}/>
            ))

)
}

export default ProductCartItems