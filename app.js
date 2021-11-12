const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const db =
  "mongodb+srv://hamed:123@cluster0.z8i29.mongodb.net/flight?retryWrites=true&w=majority";
try {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("MongoDB is Connected..." + " " + db));
} catch (err) {
  console.log("hello");
  console.error(err.message);
  process.exit(1);
}
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
const flightrouter = require("./Routes/api/flight");
app.use("/flight", flightrouter);

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});

