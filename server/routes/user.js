const express = require('express');

const userController = require('./../user/userController')

const userRouter = express.Router();

userRouter.get('/:id', userController.getProfileInfo, (req, res) => {
  res.redirect('http://localhost:8080/')
})

module.exports = userRouter;
