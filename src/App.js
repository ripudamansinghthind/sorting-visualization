import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './components/css/menu.css';

import SortingContainer from './components/Layout/SortingContainer';


function App() {
  return (
    <div id = "container" style = {{backgroundColor: "white"}}>
        <Router>
        <nav className="menu" id="menu">
          <div className="menu-content">
            <ul className="menu-items">
                <li className="menu-item">
                  <Link to="/Hide">
                  <div className="clickyButton">Hide
                  </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/">
                  <div className="clickyButton">Make Array
                  </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/">
                  <div className="clickyButton">Binary Sort
                  </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/">
                  <div className="clickyButton">Settings
                  </div>
                  </Link>
                </li>
            </ul>
          </div>
      </nav>
        <Switch>
                <Route exact path="/">
                <SortingContainer />
                </Route>
                <Route path="/Experience">
                </Route>
                <Route path="/Projects">
                </Route>
              </Switch>
      </Router>
    </div>
  );
}

export default App;