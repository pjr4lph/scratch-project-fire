const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const repoController = require('./repo/repoController');
const auth = require('./routes/oAuth.js');
const app = express();

const mongoURI = 'mongodb://teamfirrre:teamfire1@ds245518.mlab.com:45518/teamfirescratchproject';
mongoose.connect(mongoURI);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/auth', auth);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// app.get('/user', userController.getUserData);

app.get('/getRepos', repoController.getAllRepos);

// add logout route that removes user from users collection in db
// create button that directs to '/signout'
app.get('/signout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.redirect('http://localhost:8080/');
});

app.listen(8081, () => {
  console.log("server listening on 8081");
});
