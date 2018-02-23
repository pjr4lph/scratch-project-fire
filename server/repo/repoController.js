const Repo = require('./repoModel');

const repoController = {};

repoController.getAllRepos = (req, res, next) => {
  Repo.find({}, function(err, repos) {
    if (err) res.end(404, err);
    res.end(JSON.stringify(repos));
  });
}


module.exports = repoController;
