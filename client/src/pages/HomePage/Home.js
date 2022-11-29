import React from 'react';
import NavCard from './HomePageComponents/NavCard';
import BoxCarousel from './HomePageComponents/BoxCarousel';
import Container from '@mui/material/Container';
import './Home.scss';
import useApplicationData from '../../hooks/useApplicationData';
import FarmerList from '../../components/FarmerList';
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
    setProduct
  } = useApplicationData;

  const Farms = () => {

    return (
      <FarmerList farms={state.farms} />
    );
  };


  return (
    <Container className='section__home'>
      <BoxCarousel />
      {Farms}
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
    </Container>

  );
};

export default Home;