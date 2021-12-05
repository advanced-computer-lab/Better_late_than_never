const express = require('express')
const reservationController = require('../controller/reservation.controller');

async function CreateReservation(req, res) {
  try {
    let saveTournament = await reservationController.saveReservation(req.body);
    return res.send({response: "Ok", result: saveTournament});
  } catch (error) {
    return res.status(500).send({response: "Error", result: err})
  }
}
async function GetReservation(req, res) {
  try {
    let reservation = await reservationController.getReservation();
    return res.send({response: "Ok", result: reservation});
  } catch (error) {
    return res.status(500).send({response: "Error", result: err})
  }
}
async function DeleteReservation(req, res) {
  try {
    let result = await reservationController.deleteReservation(req.body.id);

    return res.send({response: "Ok", result: result});
  } catch (error) {
    return res.status(500).send({response: "Error", result: err})
  }
}
async function UpdateReservation(req, res) {
  try {
    let result = await reservationController.updateReservation(req.body);
    console.log("Ok", result)

    return res.send({response: "Ok", result: result});
  } catch (error) {
    return res.status(500).send({response: "Error", result: err})
  }
}


module.exports = authenticate => {
  const reservationRoutes = express.Router();
  reservationRoutes.post('/create',  CreateReservation);
  reservationRoutes.get('/',  GetReservation);
  reservationRoutes.post('/delete',  DeleteReservation);
  reservationRoutes.post('/update',  UpdateReservation);
  return reservationRoutes;
};