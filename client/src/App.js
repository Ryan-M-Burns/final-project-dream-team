import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import Account from './components/Account/Account';
import Home from './pages/HomePage/Home';
import Navbar from './Navbar';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import useApplicationData from "./hooks/useApplicationData.js";
import FarmerLogin from './pages/FarmerLogin/FarmerLogin';
import Landing from './pages/Landing/Landing';
import PastOrders from './pages/PastOrders/PastOrders';
import CartDrawer from './CartDrawer';

function App() {
  const [cartDrawer, setCartDrawer] = useState(false);

  const cartClickHandler = () => {
    setCartDrawer(current => !current);
  };

  const {
    state,
    setFarm,
    setBoxes,
    setCategory,
    setPrice,
    setProduct,
    addToCart,
    setUser,
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
              <Navbar click={cartClickHandler} />
              <img src="../images/navbackground.jpg" className="sub_nav" alt="veggieline"></img>
              <img src="../images/navbackground.jpg" className="sub_nav" alt="veggieline"></img>

              <CartDrawer show={cartDrawer} state={state} />
              <Home state={state} addToCart={addToCart} />
            </>
          } />
          <Route path='/about' element={
            <>
              <Navbar />
              <About />
            </>
          } />
          <Route path='/account' element={
            <>
              <Navbar />
              <Account />
            </>
          } />
          <Route path='/orders' element={
            <>
              <Navbar />
              <PastOrders />
            </>
          } />

          <Route path='/farmer-login' element={<FarmerLogin users={state.users} user={state.user} setUser={setUser} />} />
          {/* <Route path='/farmer-home' element={<FarmerHome />} /> */}

        </Routes>
      </Router>
    </main>
  );
}

export default App;
