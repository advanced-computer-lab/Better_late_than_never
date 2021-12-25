const Payment = require("../models/Payment");


class PaymentController {
  
    async doPayment  (req, res) {
        try {
            let {cardNumber, cardName, expireMonth, expireYear, cvv, userId} = req.body;
              let data ={
            cardNumber, 
            cardName, 
            expireMonth, 
            expireYear, 
            cvv,
            userId
        }
            var newPayment = await new Payment(data) 
         newPayment.save();
         res.send("payment done")
    }
    catch (e) {
        console.log(e);
        res.errorResponse();
      }
    }
}

module.exports = PaymentController;