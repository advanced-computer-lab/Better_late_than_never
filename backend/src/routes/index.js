const express = require("express");
const authRoute = require("./auth-routes");
const homeRoute = require("./home-routes");
const flightRoute = require('./flight-routes')
const paymentRoutes = require("./payment-routes")
const passengerRoutes = require("./passenger-routes")

const router = express.Router();

const { jsonResponseFormat } = require("../middlewares/ResponseFormatter");
router.use(jsonResponseFormat);

router.use("/auth", authRoute);
router.use("/", homeRoute);

router.use('/flight', flightRoute)
router.use('/payment', paymentRoutes)
router.use('/passenger', passengerRoutes)

module.exports = router;
