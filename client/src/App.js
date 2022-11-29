import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import AboutFarms from './pages/HomePage/AboutFarms';
import OurFarm from './Archive/OurFarm';
import Account from './components/Account/Account';
import Products from './pages/HomePage/Products.js';
import Product from './Archive/Product';
import Home from './pages/HomePage/Home';
import Landing from './pages/Landing/Landing';
import Navbar from './Navbar';
import RegisterFarm from './farmers/RegisterFarm';
import RegisterUser from './pages/RegisterUser/RegisterUser';

function App() {

  return (
    <main className="App">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <section className="section__app">
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/our-mission' element={<About />}>
            </Route>
            <Route path='/account' element={<Account />}>
            </Route>
            <Route path='/meet-the-farmers' element={<AboutFarms />}>
            </Route>
            <Route path='/products' element={<Products />}>
            </Route>
            <Route path='/our-farm/:id' element={<OurFarm />}>
            </Route>
            <Route path='/product/:id' element={<Product />}>
            </Route>
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
