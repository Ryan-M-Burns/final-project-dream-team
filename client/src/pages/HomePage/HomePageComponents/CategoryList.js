import React from 'react';
import CategoryListItem from './CategoryListItem';
import './CategoryList.scss';

const CategoryList = ({ categories, value, setCategory }) => {
console.log(categories, "categories")
  const parsedCategoryList = categories.map((oneCategory, index) => {
    const name = oneCategory.category;
    return (
      <CategoryListItem
        key={index}
        category={name}
        selected={value === name}
        onClick={() => value ?
          setCategory(null)
          :
          setCategory(name)
        }
      />
    );
  });
  return (
    <ul className="category-list">
      {parsedCategoryList}
    </ul>
  );
};

export default CategoryList;