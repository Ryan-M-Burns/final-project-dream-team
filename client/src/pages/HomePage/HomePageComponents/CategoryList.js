import React from 'react';
import CategoryListItem from './CategoryListItem';
import './CategoryListItem.scss';

const CategoryList = ({ category, setCategory, categories }) => {
  
  const parsedCategoryList = categories.map((oneCategory, index) => {
    const name = oneCategory.category
    return (
      <CategoryListItem
        key={index}
        category={name}
        onClick={() => { setCategory(name); }}
        selected={category === name}
      />
    );
  });
  return (
    <ul>
      {parsedCategoryList}
    </ul>
  );
};

export default CategoryList;