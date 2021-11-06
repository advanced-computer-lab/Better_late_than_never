import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import flights from './models/flights';

class showFlight extends Component{
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/show-flights')
      .then(res => {
        this.setState({
          flights: res.data
        })
      })
      .catch(err =>{
        console.log('Error from showFlights');
      })
  };


  render() {
    const flights = this.state.flights;
    console.log("PrintFlights: " + flights);
    let flightList;

    if(!flights) {
      flightList = "there are no flights!";
    } else {
      flightList = flights.map((flights, k) 
    
      );
    }

    return (
      <div className="ShowFlights">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Flight List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-flights" className="btn btn-outline-warning float-right">
                + Add New flights
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {flightList}
          </div>
        </div>
      </div>
    );
  }
}

export default showFlight;