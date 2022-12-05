import React, { useEffect, useState } from 'react';
import { getFilteredProducts } from '../helpers/selectors';
import FarmerProductList from './FarmerProductList';
import MyFarm from './MyFarm';
import ProductForm from './ProductForm';
import './FarmerHome.scss'
import CreateProduct from './CreateProduct';
const FarmerHome = ({ state, setProduct, addProduct }) => {

  const [showProductForm, setShowProductForm] = useState(false);
  
  // const showProducts = getFilteredProducts(state, null, state.farm);

  useEffect(() => {
    setProduct(getFilteredProducts(state, null, state.farm));
  }, [state.farm, state.products]);
  console.log('state', state)

  return (
    <div className="farmer__home">
      <MyFarm farm={state.farm} />
      <div>
        <button type='button' onClick={() => { setShowProductForm(!showProductForm); }}> Add Product </button>
      </div>
      <ul>
        {
          showProductForm
          &&
          <li>
            <CreateProduct
              state={state}
              product={state.product}
              addProduct={addProduct}
            />
          </li>
        }
        <FarmerProductList
          state={state}
          products={state.product}
          setProduct={setProduct}
        />
      </ul>
    </div>
  );
};

export default FarmerHome;