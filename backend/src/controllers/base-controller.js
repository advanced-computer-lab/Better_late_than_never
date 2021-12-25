const jwt = require("jsonwebtoken");

class BaseController {
  constructor() {}

  async get(model, query = {}) {
    let data = await model.find(query);
    return data;
  }

  async getOne(model, query = {}) {
    let data = await model.find({ _id: query });
    return data;
  }

  generateToken(data) {
    var token = jwt.sign(data, "23456ytscvbfdfdcfds");
    return token;
  }

  async create(model, data = {}) {
    let created = new model(data);
    created.save();
    return data;
  }

  async update(model, query = {}, data = {}) {
    let update = await model.findByIdAndUpdate(query, data);
    return update;
  }

  async delete(model, query = {}) {
    let deleteRecord = await model.findByIdAndDelete(query);
    return deleteRecord;
  }

  async is_exists(model, query = {}) {
    let isExist = await model.find(query);
    if (isExist.length > 0) return true;
    else return false;
  }
}

module.exports = BaseController;
