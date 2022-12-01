import React from 'react'
import useApplicationData from '../hooks/useApplicationData';
import FarmerProductList from './FarmerProductList';



const FarmerHome = () => {
  const {
    state,
    setFarm,
    setBoxes,
    setCategory,
    setPrice,
    setProduct,
  } = useApplicationData();

  return (
    <FarmerProductList state={state} products={state.products} setProduct={setProduct}/>
  )
}

export default FarmerHome