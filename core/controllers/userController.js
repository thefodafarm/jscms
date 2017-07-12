import User from '../models/Users'
import db from '../db'
import jwt from 'jsonwebtoken'
import config from '../config/config'

exports.register = (req, res, next) => {
  if(!req.body.email || !req.body.password) {
    res.json({ success: false, message: 'Please enter email and password.' });
  } else {
    
    var newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save().then(() => {
      res.json({ success: true, message: 'Successfully created new user.' });
    })
    .catch(err => {
      // return next(err);
      res.json({success: false, message: err.message, err: err});
    });
  }
}


exports.signin = (req, res) => {
  var user = db.get('users').find({email: req.body.email}).value();
  if (!user) {
    res.send({ success: false, message: 'Authentication failed. User not found.' });
  } else {
    // Check if password matches
    new User(user).comparePassword(req.body.password, function(err, isMatch) {
      if (isMatch && !err) {
        // Create token if the password matched and no error was thrown
        var token = jwt.sign(user, config.secret, {
          expiresIn: 10080 // in seconds
        });
        res.json({ success: true, token:  token });
      } else {
        res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
      }
    });
  }
}

