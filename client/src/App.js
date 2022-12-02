import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import Account from './components/Account/Account';
import Home from './pages/HomePage/Home';
import Navbar from './Navbar';
import FarmerLogin from './pages/FarmerLogin/FarmerLogin';
import Landing from './pages/Landing/Landing';
import PastOrders from './pages/PastOrders/PastOrders';

function App() {

  return (
    <main className="App">
      <Router>
        <Routes>
          {/* Landing Page Route */}
          <Route path='/' element={<Landing />} />
          {/* Main Page Routes */}
          <Route path='/home' element={
            <>
              <Navbar />
              <img src="/images/navbackground.jpg" className="sub_nav" alt="veggieline"></img>
              <Home />
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
          {/* Farmer Portal Routes */}
          <Route path='/farmer-login' element={<FarmerLogin />} />
          {/* <Route path='/farmer-portal' element={<><FarmerNav /><FarmerHome /></>} /> */}
        </Routes>
      </Router>
    </main>
  );
}

export default App;
