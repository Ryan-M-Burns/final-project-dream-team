import React from 'react';
import Container from '@mui/material/Container';
import { getFilteredProducts, getFarms } from '../../helpers/selectors';
import FarmList from '../../components/FarmList';
import ProductList from '../../components/ProductList';
import useApplicationData from "../../hooks/useApplicationData";
import './Home.scss';

const Home = () => {
  // Nav Bar - Logo, Account drop down, About
  // Farm List
  // Boxes
  // Products all generated - filter form that expands
  const {
    state,
    setFarm,
    setBoxes,
    setCategory,
    setPrice,
    setProducts,
  } = useApplicationData();
  
  const showProducts = getFilteredProducts(state, [state.category, state.price, state.farm]);

  const showFarms = getFarms(state, state.farm)

  return (
    <Container className='section__home'>
      <div className='home_farms'>
        <FarmList
          farms={showFarms}
          value={state.farm}
          setFarm={setFarm}
        />
      </div>
      <div className='products__home'>
        <ProductList
          products={state.products}
        />
      </div>
    </Container>

  );
};

export default Home;