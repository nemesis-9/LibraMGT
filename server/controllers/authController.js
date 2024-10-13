const User = require('../models/user')
const passport = require("passport"); //Passport is a middleware for Node.js that simplifies authentication with various strategies.

const registerUser = async (req, res) => {
  // Searches the MongoDB collection for a user with the email provided in the request body
  User.findOne({email: req.body.email}, (err, user) => {
    // If there is an error during the query
    if (err) {
      return res.status(400).json({success: false, err});
    }
    // 403 status code indicating that the user already exists
    if (user) {
      return res.status(403).json({success: false, message: "User already exists"});
    } else {
      const newUser = new User(req.body); // creates a new User object using the data from req.body.
      newUser.setPassword(req.body.password); // Calls setPassword method from the User model
      newUser.save((err, user) => {
        if (err) {
          return res.status(400).json({success: false, err});
        }
        return res.status(201).json({  // If successful, it responds with a 201 status code and the user data.
          success: true,
          user
        });
      })
    }
  })
}

const loginUser = async (req, res, next) => {
  // Find a user in the database by email
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      return res.status(500).json({success: false, err});
    }
    if (!user) {
      return res.status(404).json({success: false, message: "User not found"});
    }
    if (!user.isValidPassword(req.body.password)) {
      return res.status(401).json({success: false, message: "Password incorrect"});
    }
    // If email and password are correct, authenticate using passport-config
    passport.authenticate("local", (err, user, info) => {
      req.logIn(user, (err) => {
        if (err) {
          throw err;
        }
        return res.status(200).json({
          success: true,
          user
        });
      });
    },)(req, res, next); // Passing req, res, next to the authenticate function
  })
}

const logoutUser = async (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // res.redirect('/login');
  });
  return res.status(200).json({success: true, message: "User logged out"});
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser
}
