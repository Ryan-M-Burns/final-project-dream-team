import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import AboutFarms from './pages/AboutFarms/AboutFarms';
import Account from './pages/Account/Account';
import ContactUs from './pages/ContactUs/ContactUs';
import FarmProducts from './pages/FarmProducts/FarmProducts'
import Home from './pages/HomePage/Home';
import Landing from './pages/Landing/Landing';
import Navbar from './pages/Navbar/Navbar';
import RegisterFarm from './farmers/RegisterFarm';
import RegisterUser from './pages/RegisterUser/RegisterUser';

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
            <Route path='/products' element={<FarmProducts />}>
            </Route>
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
