import axios from "../axiosConfig";

class Routes {
 addPassenger(data) {
    console.log("passenger data", data);

    return axios.post(
      "/passenger/addPassenger", data
    );
  }

 getOnePassenger(data) {
    console.log("passenger data", data);

    return axios.post(
      "/passenger/getOnePassenger", data
    );
  }

 getSeats(data) {
    console.log("getSeats data", data);

    return axios.post(
      "/passenger/getSeats", data
    );
  }

 deleteBookedFlight(data) {
    console.log("passenger data", data);

    return axios.post(
      "/passenger/deleteBookedFlight", data
    );
  }

  checkBooking(data) {
    console.log("booking check", data);

    return axios.post(
      "/passenger/checkBooking", data
    );
  }

  sendEmail(data) {
    console.log("sendEmail check", data);

    return axios.post(
      "/passenger/sendEmail", data
    );
  }

 updatePassenger(data) {
    console.log("passenger updated", data);
    return axios.post(
      "/passenger/updatePassenger", data
    );
  }

}


export default new Routes();
