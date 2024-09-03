import React from 'react'
import "./directory-item.style.scss"

const DirectoryItem = ({category}) => {
  const {id, imageUrl, title} = category;
    return (
    <div className="directory-item-container" key={id}>
          <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`,
        
            }} />
          <div className="directory-item-body">
            <h2>{title}</h2>
            <p>Show Now! </p>
          </div>
        </div>
      ) 
}

export default DirectoryItem