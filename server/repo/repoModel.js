var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repoSchema = new Schema({
<<<<<<< HEAD
  forks: {type: Number, required: true}, // (# of forks)
  open_issues: {type: Number, required: true}, // (# of issues open)
  watchers: {type: Number, required: true}, // (# of watchers open)
  url: {type: String, required: true}, // (actual url of repo)
  description: {type: String, required: true},
  languages: {type: Array},
  issues: {type: Array},
  org: {type: String, required: true},
  name: {type: String},
=======
  forks: {type: Number}, // (# of forks)
  open_issues: {type: Number}, // (# of issues open)
  watchers: {type: Number}, // (# of watchers open)
  url: {type: String}, // (actual url of repo)
  description: {type: String},
  languages: {type: Array},
  issues: {type: Array},
  org: {type: String},
  name: {type: String },
>>>>>>> 92391f8b28238895a4c687a1fa6d1d96f8837f63
  avatar: {type: String}
});

module.exports = mongoose.model('Repo', repoSchema);
