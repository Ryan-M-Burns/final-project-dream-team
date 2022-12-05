import axios from 'axios';
import React from 'react';
import ProductForm from './ProductForm';
import { getFarms } from '../helpers/selectors';

const CreateProduct = ({ state, product }) => {
  const farm = getFarms(state, state.farm);

  function createNewProduct(formData) {
    axios.post('/products', formData).then(() => alert('you did it!'));
  }
  return (
    <div className="li__farmer-product-item">
      <ProductForm state={state} onSubmit={createNewProduct} />
    </div>
  );
};

export default CreateProduct;