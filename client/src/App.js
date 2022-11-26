import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.scss';

import About from './About';
import ContactUs from './ContactUs';
import Farm from './Farm';
import Home from './Home';
import Landing from './Landing';
import Navbar from './Navbar';
import RegisterFarm from './RegisterFarm';
import RegisterUser from './RegisterUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
