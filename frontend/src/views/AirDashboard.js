import React,{ Component } from "react";
import AirTable from '../components/Admin/AirTable';
import axios from 'axios';
class AirDashboard extends Component{
  constructor() {
    super();
    this.state = {
      reservation : []
    }
    this.getReservation = this.getReservation.bind(this);
  }
  getReservation() {
    axios.get('http://localhost:3080/api/reservation')
    .then((response) => {
      this.setState({reservation:response.data.result})
    })
    .catch((error) => {
      console.log(error);
    });
  }
  componentDidMount() {
    this.getReservation()
  }

  componentDidUpdate() {
    this.getReservation()
  }
  render(){
    return(
      <div className="">
        <div className="text-center text-3xl text-red-600 mb-8">All flight Informations</div>
        <div className="flex justify-center px-20">
          <AirTable reservation={this.state.reservation}/>
        </div>
      </div>
    )
  }
}
export default AirDashboard