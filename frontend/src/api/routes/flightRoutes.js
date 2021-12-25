import axios from "../axiosConfig";

class Routes {
  getFlights() {
    return axios.get("/flight/flights-list");
  }

  filterFlights(data) {
    return axios.post("/flight/filterFlights", data);
  }


  createFlight(data) {
    return axios.post("/flight/create-flight", data);
  }
  updateFlight(data) {
    return axios.post("/flight/update-flight", data);
  }

  removeFlight(_id) {
    return axios.post("flight/remove-flight", { _id });
  }

  getOneFlight(_id) {
    return axios.post("flight/getOne", { _id });
  }

  bookFlight(data) {
    console.log("axiosdata", data);
    return axios.get(
      `/flight/bookflight/?from=${data.from}&to=${data.to}&trip=${data.trip}&flightDate=${data.flightDate}&no_of_passengers=${data.no_of_passengers}&cabin=${data.cabin}&depDate=${data.depDate}&arrDate=${data.arrDate}`
    );
  }

  reservedFlight(data) {
    // console.log("axios Reserve", data);
    return axios.get(`/flight/reserved-flights/${data}`);
  }
}

export default new Routes();
