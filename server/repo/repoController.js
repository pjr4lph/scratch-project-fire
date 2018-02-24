const Repo = require('./repoModel');

const repoController = {};

repoController.getAllRepos = (req, res, next) => {
  Repo.find({}, function(err, repos) {
    if (err) {
    console.log('err ', err);
    res.send(500, err);
  }
    res.setHeader('Content-Type', 'application/json');
    res.json(repos);
    res.end();
  });
}


module.exports = repoController;
