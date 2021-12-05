const Reservation = require('../db/schema/reservation')

/**
 * Save new Reservation
 * @param {*} flightNumber 
 * @param {*} departureTime 
 * @param {*} departureDate 
 * @param {*} arrivalTime 
 * @param {*} arrivalDate 
 * @param {*} seatsNumber
 * @param {*} economyClass 
 * @param {*} businessClass
 * @param {*} firstClass 
 * @param {*} departureAirport 
 * @param {*} arrivalAirport
 * @returns 
 */
const saveReservation = async (flightData) => {
  let reservation = new Reservation({
    flightNumber: flightData.flightNumber,
    departureTime: flightData.departureTime,
    departureDate: flightData.departureDate, 
    arrivalTime: flightData.arrivalTime,
    arrivalDate: flightData.arrivalDate,
    seatsNumber: flightData.seatsNumber,
    economyClass: flightData.economyClass,
    businessClass: flightData.businessClass,
    firstClass: flightData.firstClass,
    departureAirport: flightData.departureAirport,
    arrivalAirport: flightData.arrivalAirport
  });
  return reservation.save();
}
function getReservation() {
  return Reservation.find({}).lean();
}
function updateReservation(reservation) {
  return  Reservation.findOne({_id: reservation.id}).then((user) => {
    console.log("user", user)
    user.flightNumber = reservation.flightNumber
    user.departureTime = reservation.departureTime
    user.departureDate = reservation.departureDate
    user.arrivalTime = reservation.arrivalTime
    user.arrivalDate = reservation.arrivalDate
    user.seatsNumber = reservation.seatsNumber
    user.economyClass = reservation.economyClass
    user.businessClass = reservation.businessClass
    user.firstClass = reservation.firstClass
    user.departureAirport = reservation.departureAirport
    user.arrivalAirport = reservation.arrivalAirport
    console.log("user", user)
    user.save();
  });
}

function deleteReservation(id) {
  return Reservation.find({_id: id}).remove();
}

module.exports = {
    saveReservation,
    getReservation,
    deleteReservation,
    updateReservation
}

