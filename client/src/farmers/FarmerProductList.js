import React from 'react';
import './FarmerProductList.scss';
import FarmerProductListItem from './FarmerProductListItem';

const FarmerProductList = ({products, setProduct}) => {
  const parsedProductList = products.map(product => {
    return (
      <FarmerProductListItem
        key={product.id}
        product={product}
        setProduct={setProduct}
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