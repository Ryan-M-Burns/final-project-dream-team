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
    <table className="farmer-products">
      <thead>
        <th>Product</th>
        <th>Price</th>
        <th>Pack Size</th>
        <th>Category</th>
        <th>Available</th>
        <th>Image</th>
        <th>Edit</th>
        <th>Active</th>
      </thead>
      <tbody>
        {parsedProductList}
      </tbody>
    </table>
  );
};

export default FarmerProductList;