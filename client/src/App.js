import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import Account from './components/Account/Account';
import ContactUs from './components/ContactUs/ContactUs';
import AboutFarms from './components/AboutFarms/AboutFarms';
import Home from './components/HomePage/Home';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import RegisterFarm from './farmers/RegisterFarm';
import RegisterUser from './components/RegisterUser/RegisterUser';
import ProductList from './components/ProductList';
import AboutUs from './components/aboutUs';


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
