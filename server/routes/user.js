const express = require('express');

const userController = require('./../user/userController')

const userRouter = express.Router();

userRouter.get('/:id', userController.getProfileInfo, (req, res) => {
  res.end('got user info');
})

module.exports = userRouter;
