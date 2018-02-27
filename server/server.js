const express = require('express');
const path = require('path');
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

app.get('/getRepos', repoController.getAllRepos);

app.get('/', (req, res) => {
  res.redirect('http://localhost:8080/');
});

app.listen(8081, () => {
  console.log("server listening on 8081");
});
