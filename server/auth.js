const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');
const User = require('./user/userModel');
const init = require('./init');
const ids = require('./_config')
const fs = require('fs');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://github.com/login/oauth/authorize',
    tokenURL: 'https://github.com/login/oauth/access_token',
    clientID: ids.clientID,
    clientSecret: ids.clientSecret,
    callbackURL: 'http://localhost:8081/auth/signedin',
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, cb) {
    console.log(accessToken);
    User.create({ someID: profile.id }, function (err, user) {
      if (err) console.log('User create error:  ', err);
      return cb(err, user);
    })
  })
);

init();

module.exports = passport;
