const express = require("express");
const PassengerController = require('../controllers/passengerInfo-controller')
const router = express.Router();
const passengerController = new PassengerController();


router.post("/addPassenger", passengerController.addPassenger.bind(passengerController));

router.post("/getOnePassenger", passengerController.getOne.bind(passengerController));

router.post("/updatePassenger", passengerController.updatePassenger.bind(passengerController));

router.post("/deleteBookedFlight", passengerController.deleteBookedFlight.bind(passengerController));

router.post("/checkBooking", passengerController.checkBooking.bind(passengerController));

router.post("/sendEmail", passengerController.sendEmail.bind(passengerController));

router.post("/getSeats", passengerController.getSeats.bind(passengerController));


module.exports = router;
