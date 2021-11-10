import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';

import createFlight from './components/createFlight';
import showFlights from './components/showFlights';
import showFlightDetails from './components/showFlightDetails';
import updateFlightInfo from './components/updateFlightInfo';

import CreateUser from './components/createUser';

class App extends React.Component {
  render() {
    return (
      <Router>
            <Routes> 
            <Route path="/ah" exact component={showFlights} />
             <Route path="/" exact component={createFlight} />
          <Route path='/edit-flight/:id' components={updateFlightInfo} />
          <Route path='/show-flight/:id' components={showFlightDetails} />
          <Route path='/create-user/:id' components={CreateUser} />
          </Routes>

      </Router>
    );
  }
}

export default App;