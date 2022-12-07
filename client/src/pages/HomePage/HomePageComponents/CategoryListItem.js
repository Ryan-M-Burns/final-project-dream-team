import React from 'react'
import './CategoryListItem.scss'
const CategoryListItem = ({ category, onClick, selected }) => {
  return (
    <li 
      onClick={onClick}
      className="category-list-item"
      >
      <img 
      src={`/images/category_icons/${category.toLowerCase().split(' ').join('_')}.png`} 
      alt="category-icon"
      className="category-icon"
      />
      {category}
      
    </li>
  )
}

export default CategoryListItem