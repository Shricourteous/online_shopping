import { CartContext } from '../../../context/cart-context'
import ProductCartItems from '../../checkout/product-cart.component'
import './checkout-component.styles.scss'


import React, { useContext, useEffect } from 'react'

const CheckOutPage = () => {
    const { cartItems, cartTotal} = useContext(CartContext)
    console.log("redddder")
    // useEffect(() => {
    //     settotal(cartItems.reduce((prev , eachItem)=>(prev+eachItem.price), 0))
    // }, [cartItems])
    return (
        <>
            {!cartItems[0] ? (<h2>Nothing in Cart <br />Purchase the product</h2>)
                :
                <div>
                    <div className='checkout-header'>
                    <div className='header-block'>
                        <h3>Product</h3>
                    </div>
                    <div className='header-block'></div>
                    <div className='header-block'>
                        <h3>Description</h3>
                    </div>
                    <div className='header-block'>
                        <h3>Price</h3>
                    </div>
                    <div className='header-block'>
                        <h3>Quantity</h3>
                    </div>
                    <div className='header-block'>
                        <h3>Remove</h3>
                    </div>
                    </div>
                    <hr className='headline' />
                    <div className='products-container'>
                        <ProductCartItems />
                        <div className='total'>
                            <h2>Total <span>{cartTotal}</span></h2>
                        </div>
                    </div>
                </div >

            }
        </>
    )
}

export default CheckOutPage
