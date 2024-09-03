import React, { useContext } from 'react'
import { CategoriesContext } from "../../context/categories-context"
import CategoryPreview from "../category-preview/category-preview.component"

const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext)

  return (
    <>
      {
        Object.keys(categoryMap).map(title => {
          const products = categoryMap[title] 
            return <CategoryPreview key={title} title={title.toUpperCase()} products={products}/>
        })
      }
    </>

  )
}

export default CategoriesPreview