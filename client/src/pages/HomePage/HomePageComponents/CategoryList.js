import React from 'react'
import CategoryListItem from './CategoryListItem'
import './CategoryListItem.scss';

const CategoryList = ({category, setCategory, categoryList }) => {

  parsedCategoryList = categoryList.map(categoryOption => {
    return (
      <CategoryListItem
      key={categoryOption}
      category={categoryOption}
      onClick={() => {setCategory(categoryOption)}}
      selected={category === categoryOption}
      />
    )
  })
  return (
    <div>
      <ul>
        {parsedCategoryList}
      </ul>
    </div>
  )
}

export default CategoryList