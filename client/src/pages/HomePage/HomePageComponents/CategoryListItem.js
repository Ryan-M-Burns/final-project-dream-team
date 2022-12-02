import React from 'react'
import './CategoryListItem.scss'
const CategoryListItem = ({ category, onClick, selected }) => {
  return (
    <li 
      onClick={onClick}
      style={{color: selected ? 'white' : 'red'}}
      className="category-list-item"
      >
      {/* {category} */}
      <img 
      src={`/images/category_icons/${category.toLowerCase().split(' ').join('_')}.png`} 
      alt="category-icon"
      className="category-icon"
      />
      
    </li>
  )
}

export default CategoryListItem