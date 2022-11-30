import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import Account from './components/Account/Account';
import Product from './Archive/Product';
import Home from './pages/HomePage/Home';
import Navbar from './Navbar';
import Landing from './pages/Landing/Landing';

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
              <Home />
            </>}
          />
          <Route path='/account' element={<><Navbar /> <Account /> </>} />

          {/* Farmer Portal Routes */}
          {/* <Route path='/farmer-portal' element={<FarmerLogin />} />
          <Route path='/farmer-portal' element={<><FarmerNav /><FarmerHome /></>} /> */}
        </Routes>
      </Router>
    </main>
  );
}

export default App;
