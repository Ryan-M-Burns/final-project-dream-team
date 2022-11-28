import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = (props) => {

  return (
    <ul>
      <ProductListItem
        name="henry"
        price="5"
        size="1lb"
        category="veggies"
      />
    </ul>
  );
};

export default ProductList;