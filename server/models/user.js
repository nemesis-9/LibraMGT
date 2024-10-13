// Importing modules
const mongoose = require("mongoose");
const crypto = require("crypto"); //A built-in Node.js module used for cryptographic operations

// Creating user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  hash: String, //A string field to store the hashed version of the user's password.
  salt: String, //random string of characters added to a password before it is hashed
});

// Method to set salt and hash the password for a user
UserSchema.methods.setPassword = function (password) {
  // Creating a  unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString("hex"); //The salt is 16 bytes long, converted to a hexadecimal string (hex)

  // Hashing user's salt and password with 1000 iterations
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`) //'sha512': The hashing algorithm used.
    .toString(`hex`);
};

// Method to check whether the entered password is correct or not
UserSchema.methods.isValidPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`) //Recomputes the hash of the entered password using the stored salt
    .toString(`hex`);
  return this.hash === hash;
};

module.exports = mongoose.model("User", UserSchema);
