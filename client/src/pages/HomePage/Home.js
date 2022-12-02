import {React, useEffect} from 'react';
import {getFilteredProducts, getFarms} from '../../helpers/selectors';
import FarmList from '../../components/FarmList';
import ProductList from '../../components/ProductList';
import CategoryList from './HomePageComponents/CategoryList';
import CartDrawer from '../../CartDrawer';
import './Home.scss';

const Home = ({
  state,
  setCartDrawer,
  setProduct,
  setCategory,
  setFarm,
  addToCart
}) => {
  console.log(state, "home state");
  // Nav Bar - Logo, Account drop down, About
  // Farm List
  // Boxes
  // Products all generated - filter form that expands


  useEffect(() => {
    setProduct(getFilteredProducts(state, state.category, state.price, state.farm));
  }, [state.farm]);

  const showFarms = getFarms(state, state.farm);
  return (
    <section className='section__home'>
      <div>
        <CartDrawer cart={state.cart} cartDrawer={state.cartDrawer} />
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
