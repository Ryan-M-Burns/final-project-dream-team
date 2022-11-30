import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './pages/About/About';
import OurFarm from './Archive/OurFarm';
import Account from './components/Account/Account';
import Product from './Archive/Product';
import Home from './pages/HomePage/Home';
import Navbar from './Navbar';
import useApplicationData from "./hooks/useApplicationData";

function App() {

  const appData = useApplicationData();
  return (
    <main className="App">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <div className="nav__line">
          <img src="../images/navbackground.jpg" alt="veggieline"></img>
          <img src="../images/navbackground.jpg" alt="veggieline"></img>
        </div>
        <section className="section__app">
          <Routes>
            <Route path='/home' element={<Home />} />
            
            <Route path='/our-mission' element={<About />} />
            
            <Route path='/account' element={<Account />} />
            
            <Route path='/our-farm/:id' element={<OurFarm />} />
            
          </Routes>
        </section>
      </Router>
    </main>
  );
}

export default App;
