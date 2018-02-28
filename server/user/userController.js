const User = require('./userModel');

const userController = {};

userController.getUserData = (req, res, next) => {
  console.log('getUserData fired')
  console.log(req)
}
