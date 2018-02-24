// should break out server page into routes when we have time

router.get('/auth', oAuthPassport.authenticate('oauth2', { failureRedirect: 'https://www.google.com/' }),
  function(req, res) {
    console.log("request  ", req)
    res.redirect('/');
  });
