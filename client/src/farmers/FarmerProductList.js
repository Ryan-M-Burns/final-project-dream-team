import React from 'react';
import FarmerProductList from './FarmerProductList.scss';

const FarmerProductList = ({products}) => {
  const parsedProductList = products.map(product => {
    return (
      <FarmerProductListItem
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

export default FarmerProductList;