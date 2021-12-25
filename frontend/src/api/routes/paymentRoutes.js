import axios from "../axiosConfig";

class Routes {
 doPayment(data) {
    console.log("cash data", data);

    return axios.post(
      "/payment/doPayment", data
    );
  }
}

export default new Routes();
