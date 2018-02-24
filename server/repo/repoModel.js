var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repoSchema = new Schema({
  forks: {type: Number, required: true}, // (# of forks)
  open_issues: {type: Number, required: true}, // (# of issues open)
  watchers: {type: Number, required: true}, // (# of watchers open)
  url: {type: String, required: true}, // (actual url of repo)
  description: {type: String, required: true},
  languages: {type: Array},
  issues: {type: Array},
  org: {type: String, required: true},
  name: {type: String},
  avatar: {type: String}
});

module.exports = mongoose.model('Repo', repoSchema);
