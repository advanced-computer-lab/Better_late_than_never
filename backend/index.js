const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(BodyParser.json())
// const uri = "mongodb+srv://fyp:fyp12345@cluster0.isaht.mongodb.net/doctorsPortal?retryWrites=true&w=majority";
// let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




const port = process.env.PORT || 3200;
app.listen(port, err => err ? console.log("Filed to Listen on Port", port) : console.log("Listing for Port", port));