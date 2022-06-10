var router = require('express').Router();
const passport = require('passport');


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/user',
    failureRedirect: '/user'
  }
));


router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/user');
});


module.exports = router;