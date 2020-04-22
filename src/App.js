import React from 'react';
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


function App() {
  return (
    <Router> 
      <div>
        <nav>
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
        </nav>
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
}

export default App;
