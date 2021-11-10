const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

// routes
const flight = require('./Routes/api/flight');

const app = express();

// Connect Database
const db = "mongodb+srv://dbZiad:ah@cluster0.c86mb.mongodb.net/airline?retryWrites=true&w=majority"

try {
     mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    ).then( console.log('MongoDB is Connected...'+" "+db))
   
  } catch (err) {
      console.log("hello");
    console.error(err.message);
    process.exit(1);
  }

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/flight', flight);
app.get('/', (req, res) => res.send('Hello world!'));
app.post('/create-flight',(req,res)=> res.send('a7a'))


// use Routes
app.use('/api/flight', flight);
//app.use('/components/createUser');

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));