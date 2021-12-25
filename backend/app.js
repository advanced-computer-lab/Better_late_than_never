const app = require("express")();
const cors = require("cors");
const router = require("./src/routes");
const { json, urlencoded } = require("express");
const dotenv = require("dotenv");
dotenv.config();

// Home page route.
app.get("/test", function (req, res) {
  res.send("Airline home page");
});

require("./src/dbConfig/connection");

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      callback(null, true); // allow these domains
    },
  })
);
app.use("/api", router);

app.listen(9999, () => console.log("Server Running on Port 9999"));
