var facebook = require('./facebook');
var google = require('./google');
var User = require('../server/datasets/UsersData');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser(function(user, done) {
       // console.log('serializing user: ');
       // console.log(user);
       done(null, user._id);
     });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
           // console.log('deserializing user:',user);
           done(err, user);
         });
  });

    // Setting up Passport Strategies for Facebook and Twitter
  //  facebook(passport);
  facebook(passport);
  google(passport);

}