var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  name: String,
  githubID: String,
  accessToken: String,
  profile: String
}, { collection: 'users' });


module.exports = mongoose.model('users', User);
