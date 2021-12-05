import React,{ Component } from "react";
import axios from 'axios'
class AddAirData extends Component{
  constructor() {
    super();
    this.state = {
      flightNumber:'',
      departureTime:'',
      departureDate:'',
      arrivalTime:'',
      arrivalDate:'',
      seatsNumber:'',
      economyClass:'',
      businessClass:'',
      firstClass:'',
      departureAirport:'',
      arrivalAirport:''
    }
    this.handleFlightChange = this.handleFlightChange.bind(this);
    this.handleDepartureTime = this.handleDepartureTime.bind(this);
    this.handleDepartureDate = this.handleDepartureDate.bind(this);
    this.handleArrivalTime = this.handleArrivalTime.bind(this);
    this.handleArrivalDate = this.handleArrivalDate.bind(this);
    this.handleSeatTime = this.handleSeatTime.bind(this);
    this.handleEconomyClass = this.handleEconomyClass.bind(this);
    this.handleBusinessClass = this.handleBusinessClass.bind(this);
    this.handleFirstClass = this.handleFirstClass.bind(this);
    this.handleDepartureAirport = this.handleDepartureAirport.bind(this);
    this.handleArrivalAirport = this.handleArrivalAirport.bind(this);
    this.onAdd = this.onAdd.bind(this);

  }
  handleFlightChange(e) {
    this.setState({flightNumber : e.target.value});
  }
  handleDepartureTime(e) {
    this.setState({departureTime : e.target.value});
  }
  handleDepartureDate(e) {
    this.setState({departureDate : e.target.value});
  }
  handleArrivalTime(e) {
    this.setState({arrivalTime : e.target.value});
  }
  handleArrivalDate(e) {
    this.setState({arrivalDate : e.target.value});
  }
  handleSeatTime(e) {
    this.setState({seatsNumber : e.target.value});
  }
  handleEconomyClass(e) {
    this.setState({economyClass : e.target.value});
  }
  handleBusinessClass(e) {
    this.setState({businessClass : e.target.value});
  }
  handleFirstClass(e) {
    this.setState({firstClass : e.target.value});
  }
  handleDepartureAirport(e) {
    this.setState({departureAirport : e.target.value});
  }
  handleArrivalAirport(e) {
    this.setState({arrivalAirport : e.target.value});
  }
  onAdd() {
    if(this.state.flightNumber) {
      axios.post('http://localhost:3080/api/reservation/create', {
        flightNumber: this.state.flightNumber,
        departureTime:this.state.departureTime,
        departureDate:this.state.departureDate,
        arrivalTime:this.state.arrivalTime,
        arrivalDate:this.state.arrivalDate,
        seatsNumber:this.state.seatsNumber,
        economyClass:this.state.economyClass,
        businessClass: this.state.businessClass,
        firstClass:this.state.firstClass,
        departureAirport:this.state.departureAirport,
        arrivalAirport:this.state.arrivalAirport
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }


  render(){
    return(
      <div className="p-8">
        
        <div className="flex justify-between py-2">
          <div>Flight Number</div>
          <input type="text" value={this.state.flightNumber} onChange={this.handleFlightChange}></input>
        </div>
        <div className="flex justify-between py-2">
          <div>Departure Time</div>
          <div>
            <input type="time" className="mr-2" value={this.state.departureTime} onChange={this.handleDepartureTime}></input>
            <input type="date" value={this.state.departureDate} onChange={this.handleDepartureDate}></input>
          </div>
        </div>
        <div className="flex justify-between py-2">
          <div>Arrival Time</div>
          <div>
            <input type="time" className="mr-2" value={this.state.arrivalTime} onChange={this.handleArrivalTime}></input>
            <input type="date" value={this.state.arrivalDate} onChange={this.handleArrivalDate}></input>
          </div>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Number of Economy seats</div>
          <input type="text" value={this.state.seatsNumber} onChange={this.handleSeatTime}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div> Economy business Class</div>
          <input type="text" value={this.state.economyClass} onChange={this.handleEconomyClass}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>business Class</div>
          <input type="text" value={this.state.businessClass} onChange={this.handleBusinessClass}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>First Class</div>
          <input type="text" value={this.state.firstClass} onChange={this.handleFirstClass}></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Departure airport</div>
          <input type="text" value={this.state.departureAirport} onChange={this.handleDepartureAirport} ></input>
        </div>
        <div className="flex justify-between py-2 te">
          <div>Arrival airport</div>
          <input type="text" value={this.state.arrivalAirport} onChange={this.handleArrivalAirport} ></input>
        </div>
        <div className="flex justify-end"><input type="button" value="Create" className="px-4 py-2 bg-red-500 rounded-lg" onClick={this.onAdd}/></div>
      </div>

    )
  }
}
export default AddAirData