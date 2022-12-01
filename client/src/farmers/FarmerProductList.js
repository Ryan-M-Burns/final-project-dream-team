import React from 'react';
import './FarmerProductList.scss';
import FarmerProductListItem from './FarmerProductListItem';

const FarmerProductList = ({products, setProducts, state}) => {
  const parsedProductList = products.map(product => {
    return (
      <FarmerProductListItem
        key={product.id}
        product={product}
        setProducts={setProducts}
        state={state}
      />
    );
  });
  return (
    <ul className="products_page">
      {parsedProductList}
    </ul>
  );
};

export default FarmerProductList;