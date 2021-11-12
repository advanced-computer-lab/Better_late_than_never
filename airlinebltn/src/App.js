import React from 'react';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import ShowFlights from './components/showFlightDetails';
import Nobody from './components/createUser';

function App() {
  return (
    <Router>
         <Routes>
         <Route path="/showflight" element={<Nobody />}></Route>
         <Route path="/" element={<ShowFlights/>}></Route>
         
        

    </Routes>
    </Router>

  );
}

export default App;