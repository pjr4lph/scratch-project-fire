const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const mongoURI = process.env.NODE_ENV === 'mongodb://teamfire:p%40ssword@ds245518.mlab.com:45518/teamfirescratchproject';
mongoose.connect(mongoURI);

app.use(bodyParser.json());

app.get('/' repoController.getAllRepos);

// app.get('/login', (req, res) => {
//     res.redirect('githubloginurl');
// });
//
// app.post('/login', (req, res) => {
//
// });


app.listen(8080)
