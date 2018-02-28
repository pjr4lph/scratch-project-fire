const https = require('https');
const cookieParser = require('cookie-parser')
const path = require('path');
const querystring = require('querystring');
const ids = require('../_config.js')

const User = require('./../user/userModel');

const userController = {};

userController.getToken = (req, response, next) => {
  const clientID = process.env.clientID;
  const clientSecret = process.env.clientSecret;
  const postData = querystring.stringify({
    client_id: ids.clientID,
    client_secret: ids.clientSecret,
    code: req.query.code
  })


  const options = {
    hostname: 'github.com',
    path: `/login/oauth/access_token`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  };


  const httpReq = https.request(options, (res) => {
    let body = ""
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      body += chunk;
    });

    res.on('end', () => {
      console.log('No more data in response.', body);
      response.locals.token = querystring.parse(body).access_token;
      next()
    });
  });

  httpReq.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    res.send('oops')
  });

  // write data to request body
  httpReq.write(postData);
  httpReq.end();
}

userController.getUsername = (req, res, next) => {
  const options = {
    hostname: 'api.github.com',
    path: `/user`,
    method: 'GET',
    headers: {
      'Authorization': `token ${res.locals.token}`,
      'User-Agent': 'team-fire-scratch'
    }
  };

  const httpReq = https.request(options, (httpRes) => {
    let body = ""
    httpRes.setEncoding('utf8');
    httpRes.on('data', (chunk) => {
      body += chunk;
    });

    httpRes.on('end', () => {
      const login = JSON.parse(body);
      User.create({
        githubID: login.id,
        accessToken: res.locals.token,
        profile: JSON.stringify(login)
      });
      res.locals.githubID = login.id;
      next();
    });
  });

  httpReq.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
    res.send('oops')
  });

  httpReq.end();
}

userController.getProfileInfo = (req, res, next) => {
  User.find({ githubID: req.params.id }, (err, doc) => {
    if (err) console.log(err);
    // console.log('doc: ', doc[0].profile)
    res.json(doc[0].profile);
  });
}

userController.dropFromDb = (req, res, next) => {
  console.log('dropFromDb fired');
  console.log(req.cookies);

  User.findOne({ githubID: req.cookies.db_id }, (err, doc) => {
    // console.log('doc to be deleted: ', doc)
    if (err) {
      console.log('User.findOne error: ', err);
      return;
    }
    if (doc) {
      doc.remove((err) => {
        console.log('doc.remove error: ', err);
      });
    }
  });
  next();
}

userController.updateCookies = (req, res, next) => {
  console.log('updateCookies fired')
  res.clearCookie('db_id');
  res.cookie('isLoggedIn', false);
  next();
}

module.exports = userController;
