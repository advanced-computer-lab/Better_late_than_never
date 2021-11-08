import React from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class showFlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/flight')
      .then(res => {
        this.setState({
          flight: res.data
        })
      })
      .catch(err =>{
        console.log('Error from showFlights');
      })
  };


  render() {
    const flight = this.state.flight;
    console.log("PrintFlight: " + flight);
    let flightList;

    if(!flight) {
      flightList = "there is no flight record!";
    } else {
      flightList = flight.map((flight)
      );
    }

    return (
      <div className="showFlightList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Flight List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-flight" className="btn btn-outline-warning float-right">
                + Add New Flight
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

export default showFlights;