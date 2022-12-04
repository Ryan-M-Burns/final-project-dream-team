import React, { useState } from 'react';
import { getFilteredProducts } from '../helpers/selectors';
import FarmerProductList from './FarmerProductList';
import MyFarm from './MyFarm';
import ProductForm from './ProductForm';

const FarmerHome = ({ state, setProduct, addProduct }) => {
  const [showProductForm, setShowProductForm] = useState(false);

  const showProducts = setProduct(getFilteredProducts(state, null, state.farm));

  return (
    <div>
      <MyFarm farm={state.farm} />
      <div>
        <button type='button' onClick={() => { setShowProductForm(!showProductForm); }}> Add Product </button>
      </div>
      <ul>
        {
          showProductForm
          &&
          <li>
            <ProductForm 
            state={state}
            product={state.product}
            addProduct={addProduct}
            />
          </li>
        }
        <FarmerProductList
          state={state}
          products={showProducts}
          setProduct={setProduct}
        />
      </ul>

    </div>
  );
};

export default FarmerHome;