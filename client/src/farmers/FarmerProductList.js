import React from 'react';
import './FarmerProductList.scss';
import FarmerProductListItem from './FarmerProductListItem';
import './FarmerProductList.scss';

const FarmerProductList = ({ products, setProducts, state }) => {

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
    <div className="farmer-products">
      <div>
        <p>Product</p>
        <p>Price</p>
        <p>Pack Size</p>
        <p>Category</p>
        <p>Available</p>
        <p>Image</p>
        <p>Edit</p>
        <p>Active</p>
      </div>
    {parsedProductList}
  </div>
  );
};

export default FarmerProductList;