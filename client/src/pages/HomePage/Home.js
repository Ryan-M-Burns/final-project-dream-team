import React from 'react';
import NavCard from './HomePageComponents/NavCard';
import BoxCarousel from './HomePageComponents/BoxCarousel';
import Container from '@mui/material/Container';
import { getFilteredProducts } from '../../helpers/selectors';
import FarmList from '../../components/FarmList';
import ProductList from '../../components/ProductList';
import './Home.scss';

const Home = ({ appData }) => {

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
    setProduct
  } = appData;
  console.log("pleasework!", appData);
  const showProducts = getFilteredProducts(state, state.category, state.price, state.farm);

  return (
    <Container className='section__home'>
      <BoxCarousel />
      <div className='home_farms'>
        <FarmList
          farms={state.farms}
        />
      </div>
      <ul className='ul__home'>
        <li className='li__home'>
          <NavCard className='nav-card__home' link={"/products"} pageName={"PRODUCTS"} />
          <NavCard className='nav-card__home' link={"/boxes"} pageName={"MADE FOR YOU"} />
          <NavCard className='nav-card__home' link={"/meet-the-farmers"} pageName={"MEET OUR FARMERS"} />
        </li>
        <li className='li__home'>
          <NavCard className='nav-card__home' link={"/our-mission"} pageName={"OUR MISSION"} />
          <NavCard className='nav-card__home' link={"/produce"} pageName={"PRODUCE"} />
          <NavCard className='nav-card__home' link={"/contact"} pageName={"REACH OUT"} />
        </li>
      </ul>
      <div className='products__home'>
        <ProductList
          products={showProducts}
        />
      </div>
    </Container>

  );
};

export default Home;