import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class CreateUser extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        pass:''
        
        
      };
    }
  
    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    onSubmit = e => {
      e.preventDefault();
  
      const data = {
        name: this.state.name,
        pass: this.state.pass,
        
        
      };
  
      axios
        .post('http://localhost:8000/createUser', data)
        .then(res => {
          this.setState({
            name: '',
            pass:''
            
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
                      placeholder='Name'
                      name='Name'
                      className='form-control'
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />
  
                  <div className='form-group'>
                    <input
                      type='text'
                      placeholder='Password'
                      name='Password'
                      className='form-control'
                      value={this.state.pass}
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
  
  export default CreateUser;