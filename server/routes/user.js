const express = require('express');

const userController = require('./../user/userController')

const userRouter = express.Router();

userRouter.get('/:id', userController.getProfileInfo);

module.exports = userRouter;
