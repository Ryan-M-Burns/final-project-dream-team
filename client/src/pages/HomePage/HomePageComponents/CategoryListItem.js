import React from 'react'
import './CategoryListItem.scss'
const CategoryListItem = ({ category, onClick, selected }) => {
  return (
    <li 
      onClick={onClick}
      className="category-list-item"
      >
     
      {category}
      
    </li>
  )
}

export default CategoryListItem