const express = require("express");
const FlightController = require("../controllers/flight-controller");
const router = express.Router();
const flightController = new FlightController();


router.get("/bookflight", flightController.bookFlight.bind(flightController));

router.get("/flights-list", flightController.getAll.bind(flightController));

router.post("/filterFlights", flightController.filterFlights.bind(flightController));

router.get("/reserved-flights/:id", flightController.reserverFlights.bind(flightController));

router.post(
  "/create-flight",
  flightController.createFlight.bind(flightController)
);

router.post(
  "/update-flight",
  flightController.updateFlight.bind(flightController)
);

router.post(
  "/remove-flight",
  flightController.removeFlight.bind(flightController)
);

router.post("/getOne", flightController.getOneFlight.bind(flightController));

module.exports = router;
