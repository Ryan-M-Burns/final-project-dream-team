import React from 'react';
import ProductListItem from './ProductListItem';
import './ProductList.scss';

const ProductList = ({products, addToCart}) => {
  const parsedProductList = products.map(product => {
    return (
      <ProductListItem
        key={product.id}
        product={product}
        addToCart={addToCart}
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