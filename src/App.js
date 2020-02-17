import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import ListOfUsers from './ListOfUsers';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> Hello, Welcome to the Farmers Hub!</h1>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/list'} className="nav-link">ListOfUsers</Link></li>
              <li><Link to={'/register'} className="nav-link">Registration</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/list' component={ListOfUsers} />
              <Route path='/register' component={RegistrationForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
