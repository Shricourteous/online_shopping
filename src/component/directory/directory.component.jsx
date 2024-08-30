import React from 'react'
import CategoryItem from '../category/category.component';

const Directory = ({categoryItems}) => {
  return (
    <div className="categories-container">
    {categoryItems.map((category) => {
      return (
      <CategoryItem key={category.id} category={category}/>

      )
    })
  }
  </div>
  )
}

export default Directory