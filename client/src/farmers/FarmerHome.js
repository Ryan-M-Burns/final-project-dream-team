import React, {useEffect, useState} from 'react';
import {getFilteredProducts} from '../helpers/selectors';
import FarmerProductList from './FarmerProductList';
import MyFarm from './MyFarm';
import ProductForm from './ProductForm';
import './FarmerHome.scss';
import CreateProduct from './CreateProduct';
const FarmerHome = ({state, setProduct, addProduct, editProduct}) => {

  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    setProduct(getFilteredProducts(state, null, state.farm));
  }, [state.farm, state.products]);

  const handleCreate = () => {
    setShowProductForm(false);
  };

  return (
    <div className="farmer__home">
      <div>
        <button className="farmer__addproduct" type='button' onClick={() => setShowProductForm(!showProductForm)}> Add Product </button>
      </div>
      <div>
        <ul>
          {showProductForm &&
            <li>
              <CreateProduct
                state={state}
                onSubmit={handleCreate}
                addProduct={addProduct}
              />
            </li>
          }
          <FarmerProductList
            state={state}
            products={state.product}
            setProduct={setProduct}
            editProduct={editProduct}
          />
        </ul>
      </div>
    </div>
  );
};

export default FarmerHome;