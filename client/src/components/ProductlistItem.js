import React from 'react';

const ProductListItem = (props) => {


  return (
    <li>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h2>{props.size}</h2>
      <h2>{props.category}</h2>
    </li>
  );
};

export default ProductListItem;