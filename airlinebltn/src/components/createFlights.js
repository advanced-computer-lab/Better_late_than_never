import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CreateFlights extends Component {
    constructor() {
      super();
      this.state = {
        flightNumber: '',
        departuretime:'',
        arrivaltime:'',
        dates:'',
        numberOfEconomy:'',
        nofBusclass:'',
        airports:''
        
      };
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    onSubmit = e => {
      e.preventDefault();
  
      const data = {
        flightNumber: this.state.flightNumber,
        departuretime: this.state.departuretime,
        arrivaltime: this.state.arrivaltime,
        dates: this.state.dates,
        numberOfEconomy: this.state.numberOfEconomy,
        nofBusclass: this.state.nofBusclass,
        airports: this.state.airports
        
      };
  
      axios
        .post('http://localhost:8000/create-user', data)
        .then(res => {
          this.setState({
            flightNumber: '',
            departuretime:'',
            arrivaltime:'',
            dates:'',
            numberOfEconomy:'',
            nofBusclass:'',
            airports:''
            
          })
          this.props.history.push('/');
        })
        .catch(err => {
          console.log("Error in CreateUser!");
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
                    Show Users
                </Link>
              </div>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add User</h1>
                <p className="lead text-center">
                    Create new user
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
                      value={this.state.departuretime}
                      onChange={this.onChange}
                    />
                  </div>
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Arrival time'
                      name='Arrival time'
                      className='form-control'
                      value={this.state.arrivaltime}
                      onChange={this.onChange}
                    />
                  </div>
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Date'
                      name='Date'
                      className='form-control'
                      value={this.state.dates}
                      onChange={this.onChange}
                    />
                  </div>
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Number of Economy seats'
                      name='Number of Economy seats'
                      className='form-control'
                      value={this.state.numberOfEconomy}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Number of business seats'
                      name='Number of business seats'
                      className='form-control'
                      value={this.state.nofBusclass}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Airport'
                      name='Airport'
                      className='form-control'
                      value={this.state.airports}
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
  
  export default CreateFlights;