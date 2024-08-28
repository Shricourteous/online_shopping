import React from 'react'
import "./category.style.scss"

const CategoryItem = ({category}) => {
  const {id, imageUrl, title} = category;
    return (
    <div className="category-container" key={id}>
          <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`,
        
            }} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Show Now! </p>
          </div>
        </div>
      ) 
}

export default CategoryItem