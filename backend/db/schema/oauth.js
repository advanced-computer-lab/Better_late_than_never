const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../../db/schema/user')

mongoose.model('OAuthToken', new Schema({
  accessToken: String,
  accessTokenExpiresAt: Date,
  refreshToken: String,
  refreshTokenExpiresAt: Date,
  user:  { type : Object, ref: User },
  client: { type : Object, ref: 'OAuthClient' }
}));

mongoose.model('OAuthClient', new Schema({
  clientId: String,
  clientSecret: String,
  grants: [String],
  redirectUris: [String]
}));



const OAuthTokensModel = mongoose.model('OAuthToken');
const OAuthClientsModel = mongoose.model('OAuthClient');
mongoose.set('autoCreate', true);

module.exports = {
  OAuthTokensModel,
  OAuthClientsModel
}