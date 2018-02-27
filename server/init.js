const passport = require('passport');
const User = require('./user/userModel');

module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      if (err) console.log("findById error:  ", err);
      done(err, user);
    });
  });
}
