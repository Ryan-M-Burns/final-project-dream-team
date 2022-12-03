import React, { useState } from 'react'
import { getFilteredProducts } from '../helpers/selectors';
import FarmerProductList from './FarmerProductList';
import MyFarm from './MyFarm';
import ProductForm from './ProductForm';

const FarmerHome = ({state, setProduct}) => {
  const [showProductForm, setShowProductForm] = useState(false)

  setProduct(getFilteredProducts(state, null, null, state.farm))

  return (
    <div>
      <MyFarm farm={state.farm}/>
      <div>
        <button type='button' onClick={() => {setShowProductForm(!showProductForm)}}> Add Product </button>
      </div>
      <ul>
        {showProductForm && <li> <ProductForm/> </li> }
        <FarmerProductList state={state} products={state.product} setProduct={setProduct}/>
      </ul>
      
    </div>
  )
}

export default FarmerHome