import React, { useContext, useEffect, useState } from 'react'



import "./category.style.scss"
import { CategoriesContext } from '../../../context/categories-context'
import { useParams } from 'react-router-dom'
import ProductCard from '../../product-card/product-card.component'

const Category = () => {
    const {category} = useParams()  // get the specific parameter passed by parent component
    const {categoryMap} = useContext(CategoriesContext) //has everything like hats, mens, womens ... 

    const [products, setproducts] = useState(categoryMap[category])

    useEffect(() => {
        setproducts(categoryMap[category])
      
    }, [categoryMap, category])
    

  return (
    <>
    <h2>{category.toUpperCase()}</h2>
    <div className='category-container'>
        {
            products && products.map((product)=> (
                <ProductCard key={product.id} product={product}/>
            ))
        }
    </div>

    </>
    
  )
}

export default Category