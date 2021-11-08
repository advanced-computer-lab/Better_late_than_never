const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

// routes
const flight = require('./Routes/api/flight');

const app = express();

// Connect Database
const db = "mongodb+srv://omar:11oah2015@betterlatethannever.p9s0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

try {
     mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    ).then( console.log('MongoDB is Connected...'))
   
  } catch (err) {
      console.log("hello");
    console.error(err.message);
    process.exit(1);
  }

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/flight', flight);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));