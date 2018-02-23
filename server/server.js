const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');


const app = express();

const mongoURI = process.env.NODE_ENV === 'mongodb://teamfire:p%40ssword@ds245518.mlab.com:45518/teamfirescratchproject';
mongoose.connect(mongoURI);

app.use(bodyParser.json());

app.get('/' repoController.getAllRepos);

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://github.com/login/oauth/authorize?client_id=002c7138176488b1957e&redirect_uri=http://localhost:8080/oauth_redirect',
    tokenURL: ,
    clientID: '002c7138176488b1957e',
    clientSecret: 'be7d3fec37212b0cf007c4e71eba3964fb7fc3e9',
    callbackURL :
  }, function(accessToken, refreshToken, profile, cb){

  });
);

app.get('/login', passport.authenticate('oauth2'));

app.post('/login', (req, res) => {

});

('/oauth_redirect')

app.listen(8080)
