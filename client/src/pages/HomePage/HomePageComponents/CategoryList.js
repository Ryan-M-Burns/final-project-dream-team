import React from 'react';
import CategoryListItem from './CategoryListItem';
import './CategoryList.scss';

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
    <ul className="category-list">
      {parsedCategoryList}
    </ul>
  );
};

export default CategoryList;