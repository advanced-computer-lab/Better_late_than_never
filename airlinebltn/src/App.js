// app.js

const express = require('express');
const connectDB = require('./config/db');
//CHANGEEEEEEEEEEEEEEEEE ba3deen
const MongoURI =  'mongodb+srv://dbZiad:dbZiad1234@airline-bltn.zm6lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// #Task route solution
const User = require('../models/flights');
exports.addUser = (req, res) => {
    
    const user = new User(req.body)
  
    user.save()
      .then(result => {
        res.send(result);
        console.log("added");
      })
      .catch(err => {
        console.log(err);
      });
  };
// getting all the users

exports.viewUsers = (req, res) => {                                               ``
    User.find({})
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
    };

    exports.getUser = (req, res) => {
      User.find({Name:req.params.name})
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          console.log(err);
        });
    };

    exports.updateUser = (req,res)=>{
      User.findByIdAndUpdate(req.params.id,req.body).then(result =>{
  
          res.status(200).send("User updated ");
          console.log('The User is Updated successfully !');
      }).catch(err => {
          console.log(err);
        });
  
    };
  
    //Deleting an existing user
    exports.deleteUser = (req,res)=>{
      User.findByIdAndRemove(req.params.id).then(result =>{
  
          res.status(200).send("User Deleted ");
          console.log("The User is deleted successfully !");
      }).catch(err => {
          console.log(err);
        });
  
    };