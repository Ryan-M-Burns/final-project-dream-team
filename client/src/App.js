import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.scss';

import About from './About';
import Account from './Account'
import ContactUs from './ContactUs';
import AboutFarm from './AboutFarm';
import Home from './Home';
import Landing from './Landing';
import Navbar from './Navbar';
import RegisterFarm from './farmers/RegisterFarm';
import RegisterUser from './RegisterUser';


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
            <Route path='/meet-the-farmers' element={<AboutFarm />}>
            </Route>
            <Route path='/contact' element={<ContactUs />}>
            </Route>
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
