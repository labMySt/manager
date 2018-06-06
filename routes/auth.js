const express = require('express');
const router = express.Router();
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
const {User} = require('../models/index');

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

 passport.use('local-login', new LocalStrategy({
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, email, password, done) {
          User.findOne({where: {email: email}})
          .then(user => {
            if (!user)
                return done(null, false, req.json('loginMessage', 'No user found.'));
            if (!user.validPassword(password))
                return done(null, false, req.json('loginMessage', 'Oops! Wrong password.'));
            return done(null, user);
          })
          .catch(err => {
            console.log(done);
            return done(err);
          })
      }
));

passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        confirmpasswordField : 'confirmPassword',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        process.nextTick(function() {
          User.findOne({where: {email: email}})
          .then(user => {
            if (!user)
             return User.create({ email: email, password: User.generateHash(password)})
             .then(newUser => {return done(null, newUser);
             });
            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
          })
          .catch(err => {
            return done(err);
          });
        })
      }
    ));
router.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/user', // redirect to the secure profile section
        failureRedirect : '/ooops', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/user', // redirect to the secure profile section
        failureRedirect : '/ooops', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
router.get('/get_user', (req, res) =>{res.json(req.user)});
router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

module.exports = router;
