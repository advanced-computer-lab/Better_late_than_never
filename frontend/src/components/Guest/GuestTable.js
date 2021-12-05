import React,{ Component } from "react";
import Modal from '../Modal/Modal';
class GuestTable extends Component{
  constructor() {
    super();
    this.state = {
      addShow: false,
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
  showSearchModal = () => {
    this.setState({ addShow: true });
  };

  hideSearchModal = () => {
    this.setState({ addShow: false });
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
  searchRfp(link) {
    const lowerSearchTerm = this.state.searchFlightNumber.toLowerCase() || this.state.searchDepartureTime.toLowerCase() || this.state.searchArrivalTime.toLowerCase() || this.state.searchSeatsNumber.toLowerCase() || this.state.searchEconomyClass.toLowerCase() || this.state.searchFirstClass.toLowerCase() || this.state.searchDepartureAirport.toLowerCase() || this.state.searchArrivalAirport.toLowerCase()
    if (!lowerSearchTerm) return true

    return (
      link.flightNumber?.toLowerCase().includes(lowerSearchTerm))
  }

  render(){
    return(
      <div className="flex">
        <Modal show={this.state.addShow} handleClose={this.hideSearchModal}>
          <div>Hello</div>
        </Modal>

        <div className="flex flex-col">
            <div>
              <input type="checkbox" id="scales" name="scales" className="mr-2"/>
              <label htmlFor="scales">Round trip</label>
              <input type="checkbox" id="scales" name="scales" className="ml-8 mr-2"/>
              <label htmlFor="scales">One-way</label>
            </div>
          <div className="flex flex-col">
              <div className="border-2 border-red-400 my-1 p-2">
                <div>Airport</div>
                <div className="flex flex-col">
                  <div className="flex justify-between my-1">
                    <div>From:</div> 
                    <input type="text"  className="ml-2" value={this.state.searchDepartureAirport}  onChange={this.handleDepartureAirport}/>
                  </div> 
                  <div className="flex justify-between my-1">
                    <div>To:</div> 
                    <input type="text"  className="ml-2" value={this.state.searchArrivalAirport}  onChange={this.handleArrivalAirport}/>
                  </div> 
                </div>
              </div>
              <div  className="border-2 border-red-400 my-1 p-2">
                <div>Number of passengers</div>
                <div className="flex justify-between my-1">
                    <div>passengers</div> 
                    <input type="text"  className="ml-2"/>
                  </div> 
              </div>
              <div  className="border-2 border-red-400 my-1 p-2">
                <div>Dates</div>
                <div className="flex flex-col">
                  <div className="flex justify-between my-1">
                    <div>From:</div> 
                    <input type="text"  className="ml-2" value={this.state.searchDepartureTime}  onChange={this.handleDepartureTime}/>
                  </div> 
                  <div className="flex justify-between my-1">
                    <div>To:</div> 
                    <input type="text"  className="ml-2" value={this.state.searchArrivalTime}  onChange={this.handleArrivalTime}/>
                  </div> 
                </div>
              </div>
              <div  className="border-2 border-red-400 my-1 p-2">
                <div>Cabin Class</div>
                <div className="flex flex-col">
                  <div className="flex justify-between my-1">
                    <div>Economy</div> 
                    <input type="text"  className="ml-2" value={this.state.searchEconomyClass}  onChange={this.handleEconomyClass}/>
                  </div> 
                  <div className="flex justify-between my-1">
                    <div>Business</div> 
                    <input type="text"  className="ml-2" value={this.state.searchBusinessClass}  onChange={this.handleBusinessClass}/>
                  </div> 
                  <div className="flex justify-between my-1">
                    <div>First</div> 
                    <input type="text"  className="ml-2" value={this.state.searchFirstClass}  onChange={this.handleFirstClass}/>
                  </div> 
                </div>
              </div>
          </div>
        </div>
        
        <table className="text-center">
          <thead className="py-2 text-xl">
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
            </tr>
          </thead>
          <tbody>
            {this.props.reservation.filter(this.searchRfp).map((flight)=>(
              <tr className="text-lg"  key={flight._id}>
                <td>{flight.flightNumber}</td>
                <td>{flight.arrivalTime}{flight.arrivalDate}</td>
                <td>{flight.departureTime}{flight.departureDate}</td>
                <td>{flight.seatsNumber}</td>
                <td>{flight.economyClass}</td>
                <td>{flight.businessClass}</td>
                <td>{flight.firstClass}</td>
                <td>{flight.departureAirport}</td>
                <td>{flight.arrivalAirport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    )
  }
}
export default GuestTable