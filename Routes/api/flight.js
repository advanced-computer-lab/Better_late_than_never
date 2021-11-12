const express = require("express");
const { findOneAndUpdate } = require("../../models/flight");
const flight = require("../../models/flight");
const router = express.Router();
const user = require("../../models/user");
const mongoose = require('mongoose');



router.get("/get-all-flights", (req, res) => {
  flight.find()
    .then((flight) => res.json(flight))
    .catch((err) =>
      res.status(404).json({ noFlightsFound: "No Flights found" })
    );
});
router.post("/find-and-update", async( req, res) => {
  await mongoose.set('useFindAndModify', false);
  
  const u=await flight.findOneAndUpdate({flightNumber:req.body.flightNumber},{
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    date: req.body.date,
    noOfEconomySeats: req.body.noOfEconomySeats,
    noOfBuseinessSeats: req.body.noOfBuseinessSeats,
    airport: req.body.airport,
},{new:true})

console.log(u)
res.send(u)
});
router.delete('/delete',async (req,res)=>{
const i = await flight.findOneAndDelete({flightNumber:req.body.flightNumber})
console.log(i)
res.send('deleted !')
})
router.get('/search',async (req,res)=>{
  const i = await flight.findOne({flightNumber:req.body.flightNumber})
  console.log(i)
  res.send(i)

})
router.post("/create-flight", (req, res) => {
  console.log("here");
  const u = new flight({
    flightNumber: req.body.flightNumber,
    departureTime: req.body.departureTime,
    arrivalTime: req.body.arrivalTime,
    date: req.body.date,
    noOfEconomySeats: req.body.noOfEconomySeats,
    noOfBuseinessSeats: req.body.noOfBuseinessSeats,
    airport: req.body.airport,
  });
  console.log(u);
  u.save()
    .then(() => res.json("mbrook !!111!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.post("/create-user", (req, res) => {
  const x = new user({
    name: req.body.username,
    password: req.body.pass,
  });

  console.log(x);
  x.save()
    .then(() => res.json("mbrook !!111!!"))
    .catch((err) => res.status(400).json("Error: " + err));
});


module.exports = router;
