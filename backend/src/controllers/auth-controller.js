const BaseController = require("./base-controller");
const bcrypt = require("bcrypt");
const Role = require("../models/Role");
const User = require("../models/User");

const saltRounds = 10;

class AuthController extends BaseController {
  constructor() {
    super();
  }

  async changePass(req, res) {
    try {
      let { old_password, new_password, user_id } = req.body;

      let user = await User.findOne({ _id: user_id });
      if (user && bcrypt.compareSync(old_password, user.password)) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const updated = bcrypt.hashSync(new_password, salt);

        let data = await User.updateOne({ updated });
        res.successResponse({
          data,
          message: "Password Updated Successfully!",
        });
      } else {
        res.errorResponse("Old Password not match!");
      }
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }

  async login(req, res) {
    try {
      let { email, password } = req.body;
      let user = (await this.get(User, { email }))[0];
      if (user && bcrypt.compareSync(password, user.password)) {
        let userDetail = await User.findOne({ email });
        let data = {
          user: userDetail,
          token: this.generateToken({ _id: user._id, name: user.userName }),
        };
        res.successResponse({ data, message: "Login Successfully!" });
      } else {
        res.errorResponse("Invalid User", 404);
      }
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }

  // Completed
  async register(req, res) {
    try {
      console.log(req.body);
      let {
        f_name,
        l_name,
        userName,
        password,
        address,
        countryCode,
        email,
        mobileNumber,
        telNumber,
        passportNumber,
      } = req.body;
      if (!(await this.is_exists(User, { email }))) {
        const salt = bcrypt.genSaltSync(saltRounds);
        let data = {
          f_name,
          l_name,
          userName,
          password: bcrypt.hashSync(password, salt),
          address,
          countryCode,
          email,
          mobileNumber,
          telNumber,
          passportNumber,
        };

        data = await this.create(User, data);
        res.successResponse({ data, message: "User Register Successfully" });
      } else {
        res.errorResponse("Email Already Exists", 409);
      }
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }

  async getUsers(req, res) {
    try {
      let data = await this.get(User);
      res.successResponse({ data });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }

  async getRoles(req, res) {
    try {
      let data = await this.get(Role);
      res.successResponse({ data });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  }
}

module.exports = AuthController;
