import React from 'react';
import axios from 'axios';
export default class showFlightDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        names:[],
      
      }
   
  } 

  componentDidMount() {
   console.log("ahaha")
    
 
    axios.get('http://localhost:5000/flight/get-all-flights')
      .then(response => {
        
      this.setState({
               
              names:response.data,
            

      })
           
            
          console.log(this.state.names)
       
        
      })
      .catch((error) => {
        console.log(error);
      })

  }




 
render() {
    return (
      <div className="aaa">
      
     <ul>  {this.state.names.map(function(item) {return console.log({item}), <li key={item}>
       <ul> flight number : {item.flightNumber}</ul>  <ul> flight airport: {item.airport} </ul> <ul>flight arrival time : {item.arrivalTime}</ul><ul> flight date : {item.date}</ul><ul> flight departure time: {item.departureTime}</ul><ul> number Of Buseiness Seats: {item.noOfBuseinessSeats}</ul><ul> number of economy seats:{item.noOfEconomySeats} </ul><ul> --------- </ul></li> ;
    })}</ul>
  </div>
    
    )
  }
}
