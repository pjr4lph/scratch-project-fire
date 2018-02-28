const passport = require('passport');
const githubStrategy = require('passport-github');
const User = require('./user/userModel');
const init = require('./init');
const ids = require('./_config')
const fs = require('fs');


passport.use(new githubStrategy({
    authorizationURL: 'https://github.com/login/oauth/authorize',
    tokenURL: 'https://github.com/login/oauth/access_token',
    clientID: ids.clientID,
    clientSecret: ids.clientSecret,
    callbackURL: 'http://localhost:8081/auth/signedin',
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('profile: ', profile, profile.id)
    User.create({
      githubID: profile.id,
      accessToken,
      profile: JSON.stringify(profile)
    }, function (err, user) {
      if (err) console.log('User create error:  ', err);
      return cb(err, user);
    })
  })
);

init();

module.exports = passport;
