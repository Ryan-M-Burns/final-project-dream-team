import React from 'react';
import CategoryListItem from './CategoryListItem';
import './CategoryListItem.scss';

const CategoryList = ({ category, setCategory, categories }) => {
  console.log(category, categories, "category, categories");
  const parsedCategoryList = categories.map((categoryOption, index) => {

    return (
      <CategoryListItem
        key={index}
        category={categoryOption.category}
        onClick={() => { setCategory(categoryOption.category); }}
        selected={category === categoryOption.category}
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