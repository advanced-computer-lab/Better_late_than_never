import axios from "../axiosConfig";

class Routes {
  changePass(data) {
    return axios.post("/auth/change-pass", data);
  }
  login(data) {
    return axios.post("/auth/login", data);
  }
  register(data) {
    return axios.post("/auth/register", data);
  }
  getUsers(data) {
    return axios.get("/auth/users", data);
  }
}

export default new Routes();
