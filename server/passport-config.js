const LocalStrategy = require("passport-local"); // LocalStrategy provides a  how user authentication handled 
const User = require("./models/user"); // User model  used to find users in the database

const initializePassport = (passport) => {
  // A callback function that will be called when the authentication process is complete (either successfully or with an error).
  const authenticateUser = (email, password, cb) => {  
    User.findOne({email: email}, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false, {message: "User not found"});
      }
      if (!user.isValidPassword(password)) {
        return cb(null, false, {message: "Password incorrect"});
      } else {
        return cb(null, user);
      }
    });
  };
  passport.use(new LocalStrategy({usernameField: "email"}, authenticateUser));
  passport.serializeUser((user, done) => done(null, user));
  passport.deserializeUser((user, done) => {
    User.findById(user._id, (err, user) => {
      done(err, user);
    });
  });
};

module.exports = initializePassport;
