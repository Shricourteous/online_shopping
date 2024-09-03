import React from 'react'
import DirectoryItem from '../directory-item/directory-item.component';
const Directory = ({categoryItems}) => {
  return (
    <div className="categories-container">
    {categoryItems.map((category) => {
      return (
      <DirectoryItem key={category.id} category={category}/>

      )
    })
  }
  </div>
  )
}

export default Directory