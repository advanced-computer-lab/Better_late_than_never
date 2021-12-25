const express = require("express");
const PaymentController = require('../controllers/payment-controller')
const router = express.Router();
const paymentController = new PaymentController();

router.post("/doPayment", paymentController.doPayment.bind(paymentController));

module.exports = router;