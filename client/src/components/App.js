import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import About from './About/About';
import Account from './Account/Account';
import ContactUs from './ContactUs/ContactUs';
import AboutFarms from './AboutFarms/AboutFarms';
import Home from './HomePage/Home';
import Landing from './Landing/Landing';
import Navbar from './Navbar/Navbar';
import RegisterFarm from '../farmers/RegisterFarm';
import RegisterUser from './RegisterUser/RegisterUser';
import ProductList from './ProductList';
import AboutUs from './aboutUs';


function App() {

  return (
    <main className="App">

      <Router>
        <nav>
          <Navbar />
        </nav>
        <section>
          <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/our-mission' element={<About />}>
            </Route>
            <Route path='/account' element={<Account />}>
            </Route>
            <Route path='/meet-the-farmers' element={<AboutFarms />}>
            </Route>
            <Route path='/contact' element={<ContactUs />}>
            </Route>
            <Route path='/products' element={<ProductList />}>
            </Route>
            <Route path='/about' element={<AboutUs />}>
            </Route>
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
