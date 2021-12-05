const express = require('express');

module.exports = authenticate =>  {
  const router = express.Router();
  const reservationRoutes = require('./reservation.route')(authenticate)
  router.use('/reservation', reservationRoutes);
  return router;
};