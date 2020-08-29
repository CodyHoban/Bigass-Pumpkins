import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Account from './Components/Account';






function App() {
  return (
    <Router> 
      <div>
        <Menu/>
      </div>
      <Switch>

        <Route path="/about">
          <About />
        </Route>
        <Route  path="/account">
          <Account />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch> 
    </Router>
  );
};

export default App;
