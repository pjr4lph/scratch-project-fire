const express = require('express');
const passport = require('passport');
const oAuthPassport = require('../auth');
const session = require('express-session');

const router = express.Router();

router.get('/signout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

router.use(passport.initialize());
router.use(passport.session());

router.get('/', oAuthPassport.authenticate('github'), (req, res, next) => {
  res.redirect('http://localhost:8080/?'+req.user.githubID);
});

module.exports = router;
