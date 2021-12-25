const Flight = require("../models/Flights");
const Seat = require("../models/Seats");
const Passenger = require("../models/PassengerInfo");
const BaseController = require("./base-controller");

class FlightController extends BaseController {
  async getOneFlight(req, res) {
    try {
      let { _id } = req.body;
      // let {flightId} = _id;
      let dataf = await this.getOne(Flight, _id);
      let datas = await Seat.findOne({flightId:_id});
      res.send( {dataf, datas} );
    } catch (error) {
      res.errorResponse();
      console.log(error);
    }
  }

  async removeFlight(req, res) {
    try {
      let { _id } = req.body;
      let data = await this.delete(Flight, _id);
      res.successResponse({ data });
      console.log(req.body);
    } catch (error) {
      res.errorResponse();
      console.log(error);
    }
  }


  async bookFlight(req, res) {
    // console.log("request", req)
    try {
      let { from, to, trip, depDate, arrDate, no_of_passengers, cabin } =
        req.query;
      console.log("query", req.query);
      // Trip: trip, Cabin:cabin, dep_date: depDate, arr_date: arrDate
      let avaliableFlight =  Flight.find(
        { from: from, to: to, dep_date: depDate, arr_date: arrDate, trip: trip},
        function (err, fl) {
          console.log("fl", fl?.length);
          return(
           fl?.length>0 ? res.send(fl) : res.send(null)
           )
        }
        );
        // return res.send(avaliableFlight);
      // console.log("Avaliable Flight", avaliableFlight)
    } catch (e) {
      console.log(e);
      // res.errorResponse();
    }
  }

  async getAll(req, res) {
    try {
      let data = await this.get(Flight);
      res.successResponse({ data });
    } catch (error) {
      console.log(error);
      res.errorResponse();
    }
  }

  async updateFlight(req, res) {
    try {
      let {
        _id,
        trip,
        flight_number,
        to,
        from,
        // stop,
        economy_seats,
        business_class_seats,
        first_class_seats,
        dep_time,
        dep_date,
        arr_time,
        arr_date,
        ticket,
        airport_terminal,
      } = req.body;

      let data = {
        trip,
        flight_number,
        to,
        from,
        // stop,
        economy_seats,
        business_class_seats,
        first_class_seats,
        dep_time,
        dep_date,
        arr_time,
        arr_date,
        ticket,
        airport_terminal,
      };

      data = await this.update(Flight, _id, data);
      res.successResponse({
        data,
        message: "Record Updated Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.errorResponse();
    }
  }

  async createFlight(req, res) {
    try {
      let {
        trip,
        flight_number,
        to,
        from,
        // stop,
        economy_seats,
        business_class_seats,
        first_class_seats,
        dep_time,
        dep_date,
        arr_time,
        arr_date,
        ticket,
        airport_terminal,
      } = req.body;


      let fdata = {
        trip,
        flight_number,
        to,
        from,
        // stop,
        dep_time,
        dep_date,
        arr_time,
        arr_date,
        ticket,
        airport_terminal,
      };
     
    
      //  console.log("data", data)
      fdata = await Flight.create(fdata).then((res) => {
         console.log("return flight", res._id)
         let sdata = {
          flightId: res._id,
          economy_seats,
          business_class_seats,
          first_class_seats,
          isReserved: 0
        }
         sdata =  this.create(Seat, sdata);
      });
     
      res.successResponse({
        fdata,
        message: "Record Created Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.errorResponse();
    }
  }


  async reserverFlights(req, res) {
    try {
      let userdata = req.params;
      let data = await this.get(Passenger);
      let empArr = [];
      data.map((item) => {
        if (item.userId == userdata.id) {
          empArr.push(item);
        }
      });
      let fId = [];

      fId = empArr.map((flight) => {
        return flight.flightId;
      });
      console.log("flight IDs", fId);

      let Booked = await Flight.find({ _id: { $in: fId } });
      console.log("booked", Booked);
      res.send(Booked);
      // res.successResponse(Booked);
    } catch (error) {
      console.log(error);
      res.errorResponse();
    }
  }
  
  async filterFlights(req, res) {

    try {
       let data = req.body;
       console.log("fliter", data.data)
      let flightype = await Flight.find({trip: data.data});
      console.log("flightype", flightype)
      res.send(flightype)
      // res.successResponse(flightype);
    } catch (error) {
      console.log(error);
      res.errorResponse();
    }
  }

}

module.exports = FlightController;
