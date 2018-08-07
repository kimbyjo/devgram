const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const passport = require('passport');

//Create schema
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

/*
//Authenticate user input against database
UserSchema.statistic.authenticate = function(email, password, callback) {
  User.findOne({email: email})
  .exec(function (error, user) {
    if (error) {
      return callback(error);
    } else if (!user) {
      const err = new Error('User not found.');
      err.status = 401;
      return callback(err);
      
    }
    bcrypt.compare(password, user.password, function(error, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    })
  });
}
*/
//Hash password before saving to database
UserSchema.pre('save', function(next){
  const user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })

});
module.exports = User = mongoose.model('users', UserSchema);