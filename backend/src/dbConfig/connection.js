const mongoose = require("mongoose");

const mongodbLink =
  "mongodb+srv://test:22024254090@cluster0.dsft8.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(mongodbLink)
  .then(() => {
    console.log("databse connect");
  })
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
