import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './components/css/menu.css';

import SortingContainer from './components/Layout/SortingContainer';
import BubbleSort from './components/Layout/BubbleSort';

import Img from './components/resources/ripthind.png'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        arrayStatus: ['Please use "Make Random Array" before trying to sort it']
    };
    this.updateThisCounter = this.updateThisCounter.bind(this);
}

  updateThisCounter(parameter) {
    this.setState({arrayStatus: parameter});
  }
  
  render() {
  return (
    <div id = "container" style = {{backgroundColor: "white"}}>
      <div className="home-navigation">
        <h5>click my clock to go back to ripthind.com</h5>
        <a href="https://ripthind.com/Projects">
          <img className="actualimage" src={ Img } alt = "back to ripthind.com logo"/>
        </a>
      </div>
      <Router>
        <nav className="menu" id="menu">
          <div className="menu-content">
            <ul className="menu-items">
                <li className="menu-item">
                  <Link to="/Sorting">
                    <div className="clickyButton">Make Random Array
                    </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/BinarySorting">
                    <div className="clickyButton">Bubble Sort
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
            <div className="card" id="Profile">
                <div className="row-card">
                </div>
            </div>
          </Route>
          <Route exact path="/Sorting">
            <div className="card" id="Profile">
                <div className="row-card">
                  <SortingContainer triggerParentUpdate={ this.updateThisCounter }/>
                </div>
            </div>
          </Route>
          <Route exact path="/BinarySorting">
            <div className="card" id="Profile">
                <div className="row-card">
                  <BubbleSort message= {this.state.arrayStatus}/>
                </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
}

export default App;