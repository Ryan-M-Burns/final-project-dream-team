import React from 'react';
import ProductListItem from './ProductListItem';
import './ProductList.scss'

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
    <ul className="products_page">
      {parsedProductList}
    </ul>
  );
};

export default ProductList;