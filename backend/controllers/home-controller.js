const BaseController = require("./base-controller");
const User = require("../models/User");
const Department = require("../models/Department");
const Availability = require("../models/Availability");
const Appointment = require("../models/Appointment");
const mongoose = require("mongoose");

class HomeController extends BaseController {
  constructor() {
    super();
  }
  searchDoctor = async (req, res) => {
    try {
      let { q } = req.query;

      let result = await User.aggregate([
        { $match: { department_id: { $exists: true } } },
        {
          $lookup: {
            from: "departments",
            localField: "department_id",
            foreignField: "_id",
            as: "department",
          },
        },
        { $unwind: "$department" },
        {
          $match: {
            $or: [
              { name: { $regex: q } },
              { "department.name": { $regex: q } },
            ],
          },
        },
      ]);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  updateAppointment = async (req, res) => {
    try {
      let { status, _id } = req.body;
      let data = await Appointment.updateOne(
        {
          _id: mongoose.Types.ObjectId(_id),
        },
        {
          $set: { status: status },
        }
      );
      // let slots = await this.get(Availability, { doctor_id });
      res.successResponse({ data: data });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  getDoctorTimeSlot = async (req, res) => {
    try {
      let { doctor_id } = req.params;
      let slots = await this.get(Availability, { doctor_id });
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  getAppointments = async (req, res) => {
    try {
      let { id } = req.params;

      let slots = await Appointment.find({
        patient_id: mongoose.Types.ObjectId(id),
      }).populate("doctor_id");
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  getYoursAppointments = async (req, res) => {
    try {
      let { id } = req.params;

      let slots = await Appointment.find({
        patient_id: mongoose.Types.ObjectId(id),
      }).populate("doctor_id");

      let pending = await Appointment.find({
        patient_id: mongoose.Types.ObjectId(id),
        status: "pending",
      }).populate("doctor_id");
      res.json({ data: slots.length, pending: pending.length });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  updateDoctor = async (req, res) => {
    try {
      let { doctor_id, department_id } = req.body;

      let data = await User.updateOne(
        {
          _id: mongoose.Types.ObjectId(doctor_id),
        },
        {
          $set: { department_id: department_id },
        }
      );
      res.successResponse({ data: data });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  getAppointmentsTow = async (req, res) => {
    try {
      let { id } = req.params;
      console.log(id);
      let slots = await Appointment.find({
        doctor_id: mongoose.Types.ObjectId(id),
      }).populate("patient_id");
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  allPatient = async (req, res) => {
    try {
      let result = await User.aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "role_id",
            foreignField: "_id",
            as: "roles",
          },
        },
        { $unwind: "$roles" },
        {
          $match: {
            "roles.name": "Patient",
          },
        },
      ]);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  allDoctors = async (req, res) => {
    try {
      let { dep_id } = req.query;
      let result = await User.aggregate([
        {
          $lookup: {
            from: "roles",
            localField: "role_id",
            foreignField: "_id",
            as: "roles",
          },
        },
        { $unwind: "$roles" },
        {
          $match: {
            department_id: mongoose.Types.ObjectId(dep_id),
            "roles.name": "Doctor",
          },
        },
      ]);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  createAppointment = async (req, res) => {
    try {
      let {
        phone_number,
        disease,
        appointment,
        time,
        date,
        doctor_id,
        department_id,
        patient_id,
      } = req.body;

      let link = null;
      if (appointment.id) {
        const { v4: uuidv4 } = require("uuid");
        link = `/live-session?code=${uuidv4()}`;
      }

      let _appointment = new Appointment({
        phone_number,
        disease,
        time,

        date,
        link: link,
        doctor_id: doctor_id._id,
        department_id: department_id._id,
        patient_id: patient_id,
      });
      await _appointment.save();
      res.successResponse({ data: appointment });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  createSlot = async (req, res) => {
    try {
      let { start_time, end_time, doctor_id } = req.params;
      let slots = await this.create(Availability, {
        start_time,
        end_time,
        doctor_id,
      });
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };

  departments = async (req, res) => {
    try {
      let result = await this.get(Department);
      res.successResponse({ data: result });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  getYourDepartment = async (req, res) => {
    try {
      let { id } = req.params;
      let slots = await User.findOne({
        _id: mongoose.Types.ObjectId(id),
      }).populate("department_id");

      let appointment = await Appointment.find({
        doctor_id: mongoose.Types.ObjectId(id),
      }).populate("patient_id");

      // let patient = await Appointment.find({
      //   doctor_id: mongoose.Types.ObjectId(id),
      // }).populate("patient_id");

      console.log(appointment);
      res.json({ data: slots, appointment: appointment.length });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
  getYourPatients = async (req, res) => {
    try {
      let { id } = req.params;
      let slots = await Appointment.find({
        doctor_id: mongoose.Types.ObjectId(id),
      }).populate("patient_id");
      console.log(slots);
      res.successResponse({ data: slots });
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
  };
}

module.exports = HomeController;
