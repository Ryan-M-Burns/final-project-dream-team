import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import useApplicationData from './hooks/useApplicationData';
import About from './pages/About/About';
import Account from './components/Account/Account';
import Home from './pages/HomePage/Home';
import Navbar from './Navbar';
import FarmerLogin from './pages/FarmerLogin/FarmerLogin';
import Landing from './pages/Landing/Landing';
import PastOrders from './pages/PastOrders/PastOrders';
import FarmerHome from './farmers/FarmerHome';
import FarmerOrders from './farmers/FarmerOrders/FarmerOrders';
import FarmerNav from './farmers/FarmerNav';

function App() {

  const {
    state,
    setFarm,
    setCategory,
    setCart,
    setProduct,
    addProduct,
    editProduct,
    addToCart,
    removeFromCart,
    setUser,
    setCartDrawer,
    setCheckout,
    setCheckoutMsg,
    setUserlogin
  } = useApplicationData();

  return (
    <main className="App">
      <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path='/' element={<Landing />} />
          {/* Main Page Routes */}
          <Route path='/home' element={
            <>
              <section className="nav-block">
                <Navbar
                  setUser={setUser}
                  users={state.users}
                  user={state.user}
                  showCart={state.cartDrawer}
                  setCartDrawer={setCartDrawer}
                  setUserlogin={setUserlogin}
                  userlogin={state.userlogin}
                />
              </section>
              <section className="site-body">
                <Home
                  state={state}
                  setCartDrawer={setCartDrawer}
                  setProduct={setProduct}
                  setCategory={setCategory}
                  setFarm={setFarm}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  setCheckout={setCheckout}
                  setCheckoutMsg={setCheckoutMsg}
                  setUserlogin={setUserlogin}
                  setCart={setCart}
                />
              </section>
            </>
          } />
          <Route path='/about' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />

              <About />
            </>
          } />
          <Route path='/account' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />
              <Account />
            </>
          } />
          <Route path='/orders' element={
            <>
              <Navbar
                setUser={setUser}
                users={state.users}
                user={state.user}
                showCart={state.cartDrawer}
                setCartDrawer={setCartDrawer}
              />
              <PastOrders />
            </>
          } />
          <Route
            path='/farmer-login'
            element={
              <FarmerLogin
                users={state.users}
                user={state.user}
                state={state}
                setUser={setUser}
                farms={state.farms}
                setFarm={setFarm}
              />
            } />
          <Route
            path='/farmer-home'
            element={
              <>
                <FarmerNav
                  user={state.user}
                  setUser={setUser} />
                <FarmerHome
                  state={state}
                  setProduct={setProduct}
                  addProduct={addProduct}
                  editProduct={editProduct}
                />
              </>
            }
          />
          <Route path='/farmer-orders' element={
            <>
              <FarmerOrders />
            </>
          } />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

