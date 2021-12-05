const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    flightNumber:{
        type: String,
        trim: true,
    },
    departureTime:{
        type: String,
        trim: true,
    },
    departureDate:{
        type: String,
        trim: true,
    },
    arrivalTime:{
        type: String,
        trim: true,
    },
    arrivalDate:{
        type: String,
        trim: true,
    },
    seatsNumber:{
        type: String,
        trim: true,
    },
    economyClass:{
        type: String,
        trim: true,
    },
    businessClass:{
        type: String,
        trim: true,
    },
    firstClass:{
        type: String,
        trim: true,
    },
    departureAirport:{
        type: String,
        trim: true,
    },
    arrivalAirport:{
        type: String,
        trim: true,
    },
},{ autoCreate: true});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;