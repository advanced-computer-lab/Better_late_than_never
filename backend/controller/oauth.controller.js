const OAuthToken = require('../db/schema/oauth').OAuthTokensModel
const OAuthClient = require('../db/schema/oauth').OAuthClientsModel
const getUser = require('./user.controller').getUser;


module.exports = {getUser}

module.exports.getAccessToken = function(token, callback) {
  OAuthToken.findOne({
    accessToken: token
  }).lean().exec((function(callback, err, token) {
    if (!token) {
      console.error('Token not found');
    }
    callback(err, token);
  }).bind(null, callback));
};

module.exports.getClient= function(clientId, clientSecret, callback) {
  OAuthClient.findOne({
    clientId: clientId,
    clientSecret: clientSecret
  }).lean().exec((function(callback, err, client) {

    if (!client) {
      console.error('Client not found');
    }

    callback(err, client);
  }).bind(null, callback));
};

module.exports.getRefreshToken = function(refreshToken, callback) {
  OAuthToken.findOne({
    refreshToken: refreshToken
  }).lean().exec((function(callback, err, token) {

    if (!token) {
      console.error('Token not found' + refreshToken);
    }

    callback(err, token);
  }).bind(null, callback));
};

module.exports.saveToken = function (token, client, user, callback) {
  console.log("saveToken", token, client, user)
  token.client = client;
  token.user = user;
  let tokenInstance = new OAuthToken(token);
  tokenInstance.save((function(callback, err, token) {
    if (!token) {
      console.error('Token not saved');
    } else {
      token = token.toObject();
      delete token._id
      delete token.__v;
      delete token.client._id;
      delete token.client.clientSecret
      delete token.user._id
      delete token.user.__v
      delete token.user.password
    }
    callback(err, token);
  }).bind(null, callback));
}

module.exports.revokeToken = function (token, callback) {

  OAuthToken.deleteOne({
    refreshToken: token.refreshToken
  }).exec((function(callback, err, results) {

    let deleteSuccess = results && results.deletedCount === 1;

    if (!deleteSuccess) {
      console.error('Token not deleted');
    }

    callback(err, deleteSuccess);
  }).bind(null, callback));
};




