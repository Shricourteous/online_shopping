import { CartContext } from '../../../context/cart-context'
import ProductCartItems from '../../checkout/product-cart.component'
import './checkout-component.styles.scss'

import React, { useContext } from 'react'

const CheckOutPage = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <>
            {!cartItems[0] ? (<h2>Nothing in Cart <br />Purchase the product</h2>)
                :
                <div className='products-container'>
                    <ProductCartItems />
                </div>
            }
        </>
    )
}

export default CheckOutPage
