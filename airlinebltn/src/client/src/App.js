import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateFlights from '../../components/createFlights';
import CreateUser from '../../components/createUser';
import showFlight from '../../components/showFlight'
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/UpdateBookInfo';

class App extends components {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={showFlight} />
          <Route path='/createFlights' component={CreateFlights} />
          <Route path='/createUser' component={CreateUser} />
        </div>
      </Router>
    );
  }
  
}

export default App;
