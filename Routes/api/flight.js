const express = require('express');
const flight = require('../../models/flight');
const router = express.Router();
const user=require('../../models/user')
const Flight = require('../../models/flight');


router.get('/test', (req, res) => res.send('flight route testing!'));


router.get('/', (req, res) => {
  Flight.find()
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noFlightsFound: 'No Flights found' }));
});



router.get('/:id', (req, res) => {
  Flight.findById(req.params.id)
    .then(flight => res.json(flight))
    .catch(err => res.status(404).json({ noFlightsFound: 'No Flights found' }));
});



router.post('/', (req, res) => {
  Flight.create(req.body)
    .then(flight => res.json({ msg: 'flight added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this flight' }));
});

// 

router.post('/:id', (req, res) => {
  Flight.findByIdAndUpdate(req.params.id, req.body)
    .then(flight => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.post('/create-flight',(req,res)=>{
  const u = new flight({

   
    flightNumber:req.body.flightNumber,
    departureTime:req.body.departureTime,
    arrivalTime:req.body.arrivalTime,
    date:req.body.date,
    noOfEconomySeats:req.body.noOfBuseinessSeats,
    noOfBuseinessSeats:req.body.noOfBuseinessSeats,
    airport:req.body.airport
    });
console.log(u)
    u .save()
    .then(() => res.json('mbrook !!111!!'))
    .catch(err => res.status(400).json('Error: ' + err));



})
router.post('/create-user',(req,res)=>{

  const x = new user({
   name:req.body.username,
   password:req.body.pass
   
    });
console.log(x)
    x.save()
    .then(() => res.json('mbrook !!111!!'))
    .catch(err => res.status(400).json('Error: ' + err));



})
router.delete('/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, req.body)
    .then(flight => res.json({ mgs: 'Flight entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Flight' }));
});

module.exports = router;
