import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ products }) => {
  const parsedProductList = products.map(product => {
    return (
      <ProductListItem
        key={product.id}
        product={product}
      />
    );
  });

  return (
    <ul>
      {parsedProductList}
    </ul>
  );
};

export default ProductList;