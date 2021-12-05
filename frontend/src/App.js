import AirDashboard from './views/AirDashboard';
import GuestDashboard from './views/GuestDashboard'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<div className="bg-green-200 h-screen">
              <AirDashboard/>
            </div>}/>
            <Route path="/userview" element={<div className="bg-green-200 h-screen">
            <GuestDashboard/>
            </div>}/>
        </Routes>

 
    </Router>
  );
}

export default App;
