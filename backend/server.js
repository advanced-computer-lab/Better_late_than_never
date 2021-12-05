const express = require('express');
const app = express(), bodyParser = require("body-parser");
const oauthServer = require('oauth2-server');
const Request = oauthServer.Request;
const Response = oauthServer.Response;
const cors = require('cors')
require('./db/dbConf');
const router = require('./routes')(authenticate)
const path = require('path');

port = 3080;

app.use(cors('http://localhost:3080'));

app.oauth = new oauthServer({
  model: require('./controller/oauth.controller.js'),
  debug: true
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));



app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);

});


function authenticate(req, res, next) {
  let request = new Request({
    headers: {authorization: req.headers.authorization},
    method: req.method,
    query: req.query,
    body: req.body
  });
  let response = new Response(res);

  app.oauth.authenticate(request, response)
    .then(function (token) {
      res.locals.oauth = {token: token};
      next()
    })
    .catch(function (err) {
      // Request is not authorized.
      res.status(err.code || 500).json(err)
    });
}


app.use('/api', router);

