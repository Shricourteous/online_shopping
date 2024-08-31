import React, { useContext } from 'react'
import { ProductContext } from '../../../context/product-context'

import ProductCard from '../../product-card/product-card.component'
import "./shop.style.scss"

const ShopPage = () => {
  const {products} = useContext(ProductContext)

  return (
    <div className='product-container '>
    {
          products.map((each)=>{
            return <ProductCard key={each.id} product={each}/>
          })
    }
     </div>
  )
}

export default ShopPage