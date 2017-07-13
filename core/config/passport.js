
const JwtStrategy = require('passport-jwt').Strategy;  
const ExtractJwt = require('passport-jwt').ExtractJwt; 


import db from '../db'
import config from './config'

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {  
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    var user = db.get('users').find({'id': jwt_payload.id}).value();

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
    
  }));
};

