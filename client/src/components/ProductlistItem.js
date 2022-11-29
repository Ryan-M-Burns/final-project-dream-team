import React from 'react';

const ProductListItem = ({ product }) => {

  return (
    <li>
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <h2>{product.size}</h2>
      <h2>{product.category}</h2>
    </li>
  );
};

export default ProductListItem;