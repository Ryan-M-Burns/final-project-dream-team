import React from 'react';
import ProductListItem from './ProductListItem';
import './ProductList.scss'

const ProductList = ({ products, farms }) => {
  console.log("prooooo", products, "farrrrrr", farms)
  const parsedProductList = products.map(product => {
    const farm = farms.find(farm => farm.id === product.farm_id)
    console.log(farm, "farm")
    return (
      <ProductListItem
        key={product.id}
        product={product}
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