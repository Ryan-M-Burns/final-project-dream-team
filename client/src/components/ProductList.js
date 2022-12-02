import React from 'react';
import ProductListItem from './ProductListItem';
import './ProductList.scss';

const ProductList = ({products, addToCart, farms}) => {
  const parsedProductList = products.map(product => {

    const farm = farms.find(farm => farm.id === product.farm_id);

    return (
      <ProductListItem
        key={product.id}
        product={product}
        addToCart={addToCart}
        farm={farm.logo_url}
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