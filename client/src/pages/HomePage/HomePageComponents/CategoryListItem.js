import React from 'react'

const CategoryListItem = ({ category, onClick, selected }) => {
  return (
    <li 
      onClick={onClick}
      style={{color: selected ? 'white' : 'red'}}
      >
      {category}
      
    </li>
  )
}

export default CategoryListItem