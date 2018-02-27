const express = require('express');
const passport = require('passport');
const oAuthPassport = require('../auth');
const session = require('express-session');

const router = express.Router();

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

router.get('/signout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

router.get('/', oAuthPassport.authenticate('oauth2', { successRedirect: '/' }));

module.exports = router;
