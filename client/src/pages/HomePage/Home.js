import { React, useEffect } from 'react';
import { getFilteredProducts, getFarms, getCategories } from '../../helpers/selectors';

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
  addToCart,
  removeFromCart
}) => {

  useEffect(() => {
    setProduct(getFilteredProducts(state, state.category, state.farm));
  }, [state.farm, state.category]);

  const showFarms = getFarms(state, state.farm);
  const showCategories = getCategories(state, state.category);

  return (
    <section className='section__home'>
      <div>
        <CartDrawer cart={state.cart} cartDrawer={state.cartDrawer} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
      <div className="home-categories">
        <CategoryList
          categories={showCategories}
          value={state.category}
          setCategory={setCategory}
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
