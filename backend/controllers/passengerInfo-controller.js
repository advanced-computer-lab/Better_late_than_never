const Passenger = require("../models/PassengerInfo");
const Seat = require("../models/Seats");
const  { sendMail } = require("../middlewares/Mailer")

const formateDate = (isoDate) => {
  const date = new Date(isoDate);
  const formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
  return formatedDate;
};


class PassengerInfoController {
  
     async addPassenger(req, res) {
        try {
            let {f_name, l_name, dob, passport, gender, cabin, avaliableSeats, checkedBaggage, userId, flightId, reservedSeats} = req.body.values;
               let {user_email} = req.body;
      let data = {
        f_name,
        l_name,
        dob,
        passport,
        gender,
        cabin,
        avaliableSeats,
        checkedBaggage,
        userId,
        flightId,
        reservedSeats
      };

      // console.log("Query values", data);
      // console.log("Query email", user_email);

      var newPerson = await new Passenger(data);
      let saved = newPerson.save();
      if(saved){
        sendMail({
          from: 'pirsaien499@gmail.com',
          to: user_email,
          sender: "hasnain",
          subject: "Testing Email",
          html:` <div style="background: rgb(236, 236, 236);">
          <div style="background: white; margin-left: 200px; margin-right: 200px; border-top: 10px solid rgb(248, 0, 46);">
            <div class="email_body">
                <div style="padding: 0px 12px 0px 12px;">
                <div style="margin-top:20px;margin-bottom:100px;font-size: xxx-large;">LOGO</div>
                    <P style="font-size: 35px; font-weight: 700; color: rgb(184, 23, 105); padding: 15px 12px 0px 12px;">Your Flight has been booked, Thanks </P>
                </div>
               
                <div style="padding-bottom: 20px; margin-left: 24px; color: rgb(165, 165, 165); margin-top: 30px; font-size: 17px;">
                    <p>
                    My name is (Your name) and I am writing this letter to make a flight reservation for flight number *XYZ* for (City or Area name) tomorrow (date and time). I need reserved seats for 2/3/4 persons (More/less) and the seats should be in the business class (Describe your requirements). The seats should be alongside each other. My Credit card number is given below in case you people have to charge to make the reservations. Make sure that I get 4 seats in the business class tomorrow. If there is any problem or there are no seats available do inform me in time.

                    Credit Card number #000-111-222-333#
                    </p>
                </div>
            </div>
          </div>
          <div style="padding-bottom: 15px; background: transparent; margin-left: 222px; margin-right: 200px; margin-top: 30px;">
              <p>
                AirLine Software, Inc. <br>
                Find My Address, Lahore, Pakistan
              </p>
          </div>
        </div>`
        });
      }
      

      res.send("Passenger added");
    } catch (e) {
      console.log(e);
      res.errorResponse();
    }
     };
    
  
     async getOne(req, res) {
      try {
        let data = req.body;
        console.log("request data", req.body)
        let f_id = data?.f_id;
        let activeUser = data?.activeUser;
        let userdata = await Passenger.findOne({ flightId: f_id, userId: activeUser });
        console.log("Edit User", userdata)
        res.send(userdata)
        // res.successResponse({ userdata });
      } catch (error) {
        // res.errorResponse();
        console.log(error);
      }
     };

     async updatePassenger (req, res){
      try {
        let {f_name, l_name, dob, passport, gender, cabin, avaliableSeats, checkedBaggage, userId, flightId, reservedSeats} = req.body;
        
          let data ={
            f_name, 
            l_name, 
            dob, 
            passport, 
            gender,
            cabin,
            avaliableSeats, 
            checkedBaggage,
            userId, 
            flightId,
            reservedSeats
    }

    data = await Passenger.updateOne({userId, flightId}, data);
      res.successResponse({
        data,
        message: "Record Updated Successfully!",
      });
    } catch (error) {
      console.log(error);
      res.errorResponse();
    }
     };


     async deleteBookedFlight (req, res){
      try {
        let data = req.body;
        console.log("Delete request data", req.body)
        let f_id = data?.f_id;
        let activeUser = data?.userObj.user._id;
        let user_email = data?.userObj.user.email;
        // console.log("userrr", activeUser)
        // console.log("user_email", user_email)
        let userdata = await Passenger.deleteOne({ flightId: f_id, userId: activeUser });
       if(userdata){
        sendMail({
          from: 'pirsaien499@gmail.com',
          to: user_email,
          sender: "hasnain",
          subject: "Testing Email",
          html:` <div style="background: rgb(236, 236, 236);">
          <div style="background: white; margin-left: 200px; margin-right: 200px; border-top: 10px solid rgb(248, 0, 46);">
            <div class="email_body">
                <div style="padding: 0px 12px 0px 12px;">
                <div style="margin-top:20px;margin-bottom:100px;font-size: xxx-large;">LOGO</div>
                    <P style="font-size: 35px; font-weight: 700; color: rgb(184, 23, 105); padding: 15px 12px 0px 12px;">Flight deleted </P>
                </div>
               
                <div style="padding-bottom: 20px; margin-left: 24px; color: rgb(165, 165, 165); margin-top: 30px; font-size: 17px;">
                    <p>
                    My name is (Your name) and I am writing this letter to make a flight reservation for flight number *XYZ* for (City or Area name) tomorrow (date and time). I need reserved seats for 2/3/4 persons (More/less) and the seats should be in the business class (Describe your requirements). The seats should be alongside each other. My Credit card number is given below in case you people have to charge to make the reservations. Make sure that I get 4 seats in the business class tomorrow. If there is any problem or there are no seats available do inform me in time.

                    Credit Card number #000-111-222-333#
                    </p>
                </div>
            </div>
          </div>
          <div style="padding-bottom: 15px; background: transparent; margin-left: 222px; margin-right: 200px; margin-top: 30px;">
              <p>
                AirLine Software, Inc. <br>
                Find My Address, Lahore, Pakistan
              </p>
          </div>
        </div>`
        });
       }
        console.log("Edit User", userdata)
        res.send(userdata)
        // res.successResponse({ userdata });
      } catch (error) {
        // res.errorResponse();
        console.log(error);
      }
     };

     async checkBooking(req, res) {
      try {
      let { f_id, user_id } = req.body;
      console.log("req", req.body)
      let booking = await Passenger.findOne(
        {userId : user_id, flightId : f_id}
        // function (err, fl) {
        //   console.log("fl", fl.length);
        //   return(
        //    fl.length>0 ? res.send(fl) : res.send(null)
        //    )
        // }
        )
      console.log("booking", booking)
      booking !== null ? res.send(booking) : res.send(null)
      }
        catch (e) {
          console.log(e);
          // res.errorResponse();
        }

     }

     async sendEmail(req, res) {
      try {
        let {item, user_email } = req.body;
        console.log("Email request data", req.body.user_email)
       if(user_email){
        sendMail({
          from: 'pirsaien499@gmail.com',
          to: user_email,
          sender: "hasnain",
          subject: "Email Me",
          html:` <div style="background: rgb(236, 236, 236);">
          <div style="background: white; margin-left: 200px; margin-right: 200px; border-top: 10px solid rgb(248, 0, 46);">
            <div class="email_body">
                <div style="padding: 0px 12px 0px 12px;">
                <div style="margin-top:20px;margin-bottom:10px;font-size: xxx-large;">LOGO</div>
                    <P style="font-size: 30px; font-weight: 700; color: rgb(184, 23, 105); padding: 15px 12px 0px 12px;">Your Reserved Flight information </P>
                </div>
               
                <div style="padding-bottom: 20px; margin-left: 24px; color: rgb(165, 165, 165); margin-top: 20px; font-size: 17px;">
                    <p>Trip: ${item.trip}</p>
                    <p>Flight No: ${item.flight_number}</p>
                    <p>From: ${item.from}</p>
                    <p>To: ${item.to}</p>
                    <p>Departure Data/time: ${formateDate(item.dep_date)}/${item.dep_time}</p>
                    <p>Arrival Data/time: ${formateDate(item.arr_date)}/${item.arr_time}</p>
                    <p>Ticket Price: $${item.ticket}</p>
                    <p>Terminal: ${item.airport_terminal}</p>
                </div>
            </div>
          </div>
          <div style="padding-bottom: 15px; background: transparent; margin-left: 222px; margin-right: 200px; margin-top: 30px;">
              <p>
                AirLine Software, Inc. <br>
                Find My Address, Lahore, Pakistan
              </p>
          </div>
        </div>`
        });
     }
     res.send("Email sent")
    } catch (error) {
      // res.errorResponse();
      console.log(error);
    }

     }

     async getSeats(req, res) {
    try {
      // let data = req.body;
      let {cabin, flightId} = req.body
      console.log("request data", req.body)
      // let f_id = data?.f_id;
      // let activeUser = data?.activeUser;
      let cabindata = await Seat.findOne({ flightId: flightId});
      console.log("Edit User", cabindata)
      cabin == "firstClass" ? res.send(cabindata.first_class_seats) : (cabin == "business" ? res.send(cabindata.business_class_seats) : res.send(cabindata.economy_seats) )
      // res.send(cabindata)
      // res.successResponse({ userdata });
    } catch (error) {
      // res.errorResponse();
      console.log(error);
    }
     };

}

module.exports = PassengerInfoController;
