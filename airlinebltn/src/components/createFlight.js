import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class createFlight extends React.Component {
    constructor() {
      super();
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
        .post('http://localhost:8082/create-flight', data)
        .then(res => {
          this.setState({
            flightNumber: '',
            departureTime:'',
            arrivalTime:'',
            date:'',
            noOfEconomyClass:'',
            noOfBusinessClass:'',
            airport:''
            
          })
          this.props.history.push('/');
        })
        .catch(err => {
          console.log("Error in CreateFlight!");
        })
    };
  
    render() {
      return (
        <div className="CreateUser">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Show Flights
                </Link>
              </div>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add Flight</h1>
                <p className="lead text-center">
                    Create new flight
                </p>
  
                <form noValidate onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Flight number'
                      name='Flight number'
                      className='form-control'
                      value={this.state.flightNumber}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Departure time'
                      name='Departure time'
                      className='form-control'
                      value={this.state.departureTime}
                      onChange={this.onChange}
                    />
                  </div>
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Arrival time'
                      name='Arrival time'
                      className='form-control'
                      value={this.state.arrivalTime}
                      onChange={this.onChange}
                    />
                  </div>
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Date'
                      name='Date'
                      className='form-control'
                      value={this.state.date}
                      onChange={this.onChange}
                    />
                  </div>
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Number of Economy seats'
                      name='Number of Economy seats'
                      className='form-control'
                      value={this.state.noOfEconomyClass}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Number of business seats'
                      name='Number of business seats'
                      className='form-control'
                      value={this.state.noOfBusinessClass}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Airport'
                      name='Airport'
                      className='form-control'
                      value={this.state.airport}
                      onChange={this.onChange}
                    />
                    
                 
                  </div>
  
                  <input
                      type="submit"
                      className="btn btn-outline-warning btn-block mt-4"
                  />
                </form>
            </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default createFlight;