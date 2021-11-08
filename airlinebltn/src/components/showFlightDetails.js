import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showFlightDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/flight/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          flight: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowFlightDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/flight/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form showFlightDetails_deleteClick");
      })
  };

  cancelDelete() {
    document.getElementById("confirmDelPopup").style.display = "none";
  };
  
  openDeleteConfirm(){
    document.getElementById("confirmDelPopup").style.display = "block";
  }

  render() {

    const flight = this.state.flight;
    let flightItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Flight Number</td>
            <td>{ flight.flightNumber }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Departure Time</td>
            <td>{ flight.departureTime }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Arrival Time</td>
            <td>{ flight.arrivalTime }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>date</td>
            <td>{ flight.date }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Number Of Economy Seats</td>
            <td>{ flight.noOfEconomySeats }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Number Of Business Seats</td>
            <td>{ flight.noOfBusinessSeats }</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Airport</td>
            <td>{ flight.airport }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="showFlightDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Flight's Record</h1>
              <p className="lead text-center">
                  View Flight's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { flightItem }
          </div>

          <div class="form-popup" id="confirmDelPopup" style={{display:'none' }}>
          
            
            <h1>Are you sure you want to delete ?</h1>

            <button type="button" class="btn" onclick={this.onDeleteClick.bind(this,flight._id)}>Yes</button>
            <button type="button" class="btn cancel" onclick="cancelDelete()">No</button>
            
          </div>


          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick="openDeleteConfirm()">Delete Flight</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-flight/${flight._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Flight
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default showFlightDetails;