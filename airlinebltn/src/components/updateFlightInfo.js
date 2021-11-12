import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class updateFlightInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        flightNumber: '',
        departureTime:'',
        arrivalTime:'',
        date:'',
        noOfEconomyClass:'',
        noOfBusinessClass:'',
        airport:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/flight/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          flightNumber: res.data.flightNumber,
          departureTime: res.data.departureTime,
          arrivalTime: res.data.arrivalTime,
          date: res.data.date,
          noOfEconomyClass: res.data.noOfEconomyClass,
          noOfBusinessClass: res.data.noOfBusinessClass,
          airport: res.data.airport
        })
      })
      .catch(err => {
        console.log("Error from updateFlightInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      flightNumber: this.state.flightNumber,
      departureTime: this.state.departureTime,
      arrivalTime: this.state.arrivalTime,
      date: this.state.date,
      noOfEconomyClass: this.state.noOfEconomyClass,
      noOfBusinessClass: this.state.noOfBusinessClass,
      airport: this.state.airport
    };

    axios
      .put('http://localhost:8082/api/flight/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-flight/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in updateFlightInfo!");
      })
  };


  render() {
    return (
      <div className="updateFlightInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Flight List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Flight</h1>
              <p className="lead text-center">
                  Update Flight's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="flightNumber">Flight Number</label>
              <input
                type='text'
                placeholder='flightNumber'
                name='flightNumber'
                className='form-control'
                value={this.state.flightNumber}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="departureTime">Departure Time</label>
              <input
                type='text'
                placeholder='departureTime'
                name='departureTime'
                className='form-control'
                value={this.state.departureTime}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="arrivalTime">Arrival Time</label>
              <input
                type='text'
                placeholder='arrivalTime'
                name='arrivalTime'
                className='form-control'
                value={this.state.arrivalTime}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="date">Date</label>
              <input
                type='text'
                placeholder='date'
                name='date'
                className='form-control'
                value={this.state.date}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="noOfEconomySeats">Number Of Economy Seats</label>
              <input
                type='text'
                placeholder='noOfEconomySeats'
                name='noOfEconomySeats'
                className='form-control'
                value={this.state.noOfEconomySeats}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="noOfBusinessSeats">Number Of Business Seats</label>
              <input
                type='text'
                placeholder='noOfBusinessSeats'
                name='noOfBusinessSeats'
                className='form-control'
                value={this.state.noOfBusinessSeats}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="airport">Airport</label>
              <input
                type='text'
                placeholder='airport'
                name='airport'
                className='form-control'
                value={this.state.airport}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Flight</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default updateFlightInfo;