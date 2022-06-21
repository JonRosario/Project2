var router = require('express').Router();
const passport = require('passport');


router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));


router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/todo',
    failureRedirect: '/user'
  }
));

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/user');
  });
});

module.exports = router;