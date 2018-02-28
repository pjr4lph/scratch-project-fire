const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const userController = require('./../user/userController')


const router = express.Router();

router.use(cookieParser());

router.get('/signout', userController.dropFromDb,  userController.updateCookies, (req, res) => {
  // console.log(req)
  // req.logout();
  // req.session = null;
  res.end('signed out');
  // res.redirect('http://localhost:8080');
});

// router.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true
// }));

router.get('/', userController.getToken, userController.getUsername, (req, res, next) => {
  res.cookie('db_id', res.locals.githubID);
  res.cookie('isLoggedIn', true);
  res.redirect('http://localhost:8080/?'+res.locals.githubID);
});

module.exports = router;
