import {React, useEffect} from 'react';
import Container from '@mui/material/Container';
import {getFilteredProducts, getFarms} from '../../helpers/selectors';
import FarmList from '../../components/FarmList';
import ProductList from '../../components/ProductList';
import CategoryList from './HomePageComponents/CategoryList';
import useApplicationData from "../../hooks/useApplicationData";
import CartDrawer from '../../CartDrawer';
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
    setCart,
    setProduct,
    addToCart
  } = useApplicationData();

  useEffect(() => {
    setProduct(getFilteredProducts(state, state.category, state.price, state.farm));
  }, [state.farm]);
  // const showProducts = getFilteredProducts(state, state.category, state.price, state.farm);

  const showFarms = getFarms(state, state.farm);

  return (
    <section className='section__home'>
      <div>
        {/* <CartDrawer show={cartDrawer} /> */}
      </div>
      <div className="home-categories">
        <CategoryList
          category={state.category}
          setCategory={setCategory}
          categories={state.categories}
        />

      </div>
      <div className='home_farms'>
        <FarmList
          farms={showFarms}
          value={state.farm}
          setFarm={setFarm}
        />
      </div>
      <div className='products__home'>
        <ProductList
          addToCart={addToCart}
          products={state.product}
          farms={state.farms}
        />
      </div>
    </section>

  );
};

export default Home;
