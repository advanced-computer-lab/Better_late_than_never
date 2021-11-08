import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';

import createFlight from './components/createFlight';
import showFlights from './components/showFlights';
import showFlightDetails from './components/showFlightDetails';
import updateFlightInfo from './components/updateFlightInfo';

class App extends React.Component {
  render() {
    return (
      <Router>
            <Routes> 
          <Route exact path='/' components={showFlights} />
          <Route path='/create-flight' components={createFlight} />
          <Route path='/edit-flight/:id' components={updateFlightInfo} />
          <Route path='/show-flight/:id' components={showFlightDetails} />
          </Routes>

      </Router>
    );
  }
}

export default App;