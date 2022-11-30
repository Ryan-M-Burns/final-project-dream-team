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
  console.log("hi", appData);
  return (
    <main className="App">
      <Router>
        <nav>
          <Navbar />
        </nav>
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
