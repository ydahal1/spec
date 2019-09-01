const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const fbAuth = require("../../config/fbAuth.js")
const router = express.Router();


router.get('/', (req, res) => {
  res.send("Hello facebook")
});



// router.get('/auth/facebook', passport.authenticate('facebook'));

// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login'
//   }));



// passport.use(new FacebookStrategy({
//   clientID: fbAuth.facebookAuth.clientID,
//   clientSecret: fbAuth.facebookAuth.clientSecret,
//   callbackURL: fbAuth.facebookAuth.callbackURL
// },
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       console.log('profile', profile);
//       console.log('accessToken', accessToken);
//       console.log('refreshToken', refreshToken);

//     } catch (err) {
//       done(err, false, err.message)
//     }
//   }
// ));

module.exports = router;