import React,{ Component } from "react";
import Modal from '../Modal/Modal';
import AddAirData from './AddAirData';
import EditAirData from './EditAirData';
import axios from 'axios'
class AirTable extends Component{
  constructor() {
    super();
    this.state = {
      addShow: false,
      updateShow: false,
      searchFlightNumber:'',
      searchDepartureTime:'',
      searchArrivalTime:'',
      searchSeatsNumber:'',
      searchEconomyClass:'',
      searchBusinessClass:'',
      searchFirstClass:'',
      searchDepartureAirport:'',
      searchArrivalAirport:''

    };
    this.showAddModal = this.showAddModal.bind(this);
    this.hideAddModal = this.hideAddModal.bind(this);
    this.showUpdateModal = this.showUpdateModal.bind(this);
    this.hideUpdateModal = this.hideUpdateModal.bind(this);
    this.reservationDelete = this.reservationDelete.bind(this);
    this.handleFlightNumber = this.handleFlightNumber.bind(this);
    this.handleDepartureTime = this.handleDepartureTime.bind(this);
    this.handleArrivalTime = this.handleArrivalTime.bind(this);
    this.handleSeatsNumber = this.handleSeatsNumber.bind(this);
    this.handleEconomyClass = this.handleEconomyClass.bind(this);
    this.handleBusinessClass = this.handleBusinessClass.bind(this);
    this.handleFirstClass = this.handleFirstClass.bind(this);
    this.handleDepartureAirport = this.handleDepartureAirport.bind(this);
    this.handleArrivalAirport = this.handleArrivalAirport.bind(this);
    this.searchRfp = this.searchRfp.bind(this);
  }

  showAddModal = () => {
    this.setState({ addShow: true });
  };

  hideAddModal = () => {
    this.setState({ addShow: false });
  };
  showDeleteModal = () => {
    this.setState({ deleteShow: true });
  };

  hideDeleteModal = () => {
    this.setState({ deleteShow: false });
  };
  showUpdateModal = () => {
    this.setState({ updateShow: true });
  };

  hideUpdateModal = () => {
    this.setState({ updateShow: false });
  };
  handleFlightNumber(e) {
    this.setState({searchFlightNumber : e.target.value});
  }
  handleDepartureTime(e) {
    this.setState({searchDepartureTime : e.target.value});
  }
  handleArrivalTime(e) {
    this.setState({searchArrivalTime : e.target.value});
  }
  handleSeatsNumber(e) {
    this.setState({searchSeatsNumber : e.target.value});
  }
  handleEconomyClass(e) {
    this.setState({searchEconomyClass : e.target.value});
  }
  handleBusinessClass(e) {
    this.setState({searchBusinessClass : e.target.value})
  }
  handleFirstClass(e) {
    this.setState({searchFirstClass : e.target.value});
  }
  handleDepartureAirport(e) {
    this.setState({searchDepartureAirport : e.target.value});
  }
  handleArrivalAirport(e) {
    this.setState({searchArrivalAirport : e.target.value});
  }
  reservationDelete(id) {
    axios.post('http://localhost:3080/api/reservation/delete', {
      id:id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  searchRfp(link) {
    const lowerSearchTerm = this.state.searchFlightNumber.toLowerCase() || this.state.searchDepartureTime.toLowerCase() || this.state.searchArrivalTime.toLowerCase() || this.state.searchSeatsNumber.toLowerCase() || this.state.searchEconomyClass.toLowerCase() || this.state.searchFirstClass.toLowerCase() || this.state.searchDepartureAirport.toLowerCase() || this.state.searchArrivalAirport.toLowerCase()
    if (!lowerSearchTerm) return true

    return (
      link.flightNumber?.toLowerCase().includes(lowerSearchTerm))
  }

  render(){
    return(
      <div className="">
        <Modal show={this.state.addShow} handleClose={this.hideAddModal}>
          <AddAirData/>
        </Modal>

        <div className="flex justify-end">
          <input type="button" value="add" className="px-4 py-2" onClick={this.showAddModal}/>
        </div>
        <table className="text-center">
          <thead className="py-2 text-xl">
            <tr>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Flight Number" value={this.state.searchFlightNumber} onChange={this.handleFlightNumber}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Departure Time" value={this.state.searchDepartureTime}  onChange={this.handleDepartureTime}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Arrival Time" value={this.state.searchArrivalTime}  onChange={this.handleArrivalTime}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Seats Numer" value={this.state.searchSeatsNumber}  onChange={this.handleSeatsNumber}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Economy business Class" value={this.state.searchEconomyClass}  onChange={this.handleEconomyClass}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Economy business Class" value={this.state.searchBusinessClass}  onChange={this.handleBusinessClass}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="First Class" value={this.state.searchFirstClass}  onChange={this.handleFirstClass}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Departure airport" value={this.state.searchDepartureAirport}  onChange={this.handleDepartureAirport}/></td>
              <td className="px-2"><input type="text" className="w-28 text-sm px-2 py-1" placeholder="Arrival airport" value={this.state.searchArrivalAirport}  onChange={this.handleArrivalAirport}/></td>
              <td className="px-2"></td>
            </tr>
            <tr>
              <td className="px-2">Flight Number</td>
              <td className="px-2">Departure Time</td>
              <td className="px-2">Arrival Time</td>
              <td className="px-2">Seats Numer</td>
              <td className="px-2">Economy Class</td>
              <td className="px-2">Business Class</td>
              <td className="px-2">First Class</td>
              <td className="px-2">Departure airport</td>
              <td className="px-2">Arrival airport</td>
              <td className="px-2">Action</td>
            </tr>
          </thead>
          <tbody>
            {this.props.reservation.filter(this.searchRfp).map((flight)=>(
              <tr className="text-lg"  key={flight._id}>
                <Modal show={this.state.updateShow} handleClose={this.hideUpdateModal}>
                  <EditAirData reservation={flight}/>
                </Modal>
                <Modal show={this.state.deleteShow} handleClose={this.hideDeleteModal}>
                  <input type="button" value="Delete" className="px-2 mx-2 my-20 py-2 bg-red-500 rounded-lg" onClick={()=> this.reservationDelete(flight._id)}/>
                </Modal>
                <td>{flight.flightNumber}</td>
                <td>{flight.arrivalTime}{flight.arrivalDate}</td>
                <td>{flight.departureTime}{flight.departureDate}</td>
                <td>{flight.seatsNumber}</td>
                <td>{flight.economyClass}</td>
                <td>{flight.businessClass}</td>
                <td>{flight.firstClass}</td>
                <td>{flight.departureAirport}</td>
                <td>{flight.arrivalAirport}</td>
                <td className="flex">
                  <input type="button" value="Edit" className="px-2 mx-2 py-2 bg-red-500 rounded-lg"  onClick={this.showUpdateModal}/>
                  <input type="button" value="Delete" className="px-2 mx-2 py-2 bg-red-500 rounded-lg" onClick={this.showDeleteModal}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )
  }
}
export default AirTable