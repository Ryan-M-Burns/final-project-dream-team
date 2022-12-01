import React from 'react';
import NavCard from './HomePageComponents/NavCard';
import BoxCarousel from './HomePageComponents/BoxCarousel';
import Container from '@mui/material/Container';
import { getFilteredProducts } from '../../helpers/selectors';
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
    setProduct,
  } = useApplicationData();

  const showProducts = getFilteredProducts(state, [state.category, state.price, state.farm]);

  return (
    <Container className='section__home'>
      <div className='home_farms'>
        <FarmList
          farms={state.farms}
        />
      </div>
      <div className='products__home'>
        <ProductList
          products={showProducts}
        />
      </div>
    </Container>

  );
};

export default Home;