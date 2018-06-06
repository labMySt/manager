var express = require('express');
var router = express.Router();
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  //save in session only user id
  done(null, {id: user.id});
});

passport.deserializeUser(function (user, done) {
  // find restore user from session by id
  User.findById(user.id)
    .then(user => {
      done(null, user)
    })
    .catch(done);
});


router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
