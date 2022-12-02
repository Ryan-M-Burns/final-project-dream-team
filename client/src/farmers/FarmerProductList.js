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
    <>
      {parsedProductList}
    </>
  );
};

export default FarmerProductList;