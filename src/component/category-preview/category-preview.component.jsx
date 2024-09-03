import React from 'react'
import ProductCard from '../product-card/product-card.component'
import "./category-preview.style.scss"
import { Link } from 'react-router-dom'


const CategoryPreview = ({title, products}) => {
  return (
    <div className='category-preview-container'>
      <Link to={title.toLowerCase()}>
        <h2>
            <span className='title'>{title} | click here &#10518;</span>
        </h2>
      </Link>
        <div className='preview'>
            {
                products
                    .filter((_, idx)=> idx<4 )
                    .map((product) => (<ProductCard key={product.id} product={product}/>) )
            }
        </div>
    </div>
  )
}

export default CategoryPreview