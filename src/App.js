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
import Menu from'./Components/Menu';






function App() {
  return (
    <Router> 
      <div>
        <Menu/>
        <button>
          Nav
        </button>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
        
              </li>
            </ul>
      </div>
      <Switch>

        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch> 
    </Router>
  );
};

export default App;
