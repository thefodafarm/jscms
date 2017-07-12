import User from '../models/Users'
import db from '../db'
import jwt from 'jsonwebtoken'
import config from '../config/config'

exports.register = (req,res,next) => {
	if(!req.body.email || !req.body.password) {
		res.json({success: false, message: 'Please enter email and password'})
	} else {
		const newUser = new User({
			email: req.body.email,
			password: req.body.password
		});

		newUser.save().then(() => {
			res.json({ success: true, message: 'Successfully created new user'})
		}).catch(err => {
			res.json({success: false, message: err.message, err: err})
		});
	}
}

exports.signin = (req, res) => {
	const user = db.get('users').find({email: req.body.email}).value();
	if (!user) {
		res.send({success: false, message: 'Auth failed. User not found'});
	} else {
		new User(user).comparePassword(req.body.password, function(err, isMatch) {
			if(isMatch && !err) {
				const token = jwt.sign(user, config.secret, {
					expiresIn: 10080
				});
				res.json({success: true, token: token});
			} else {
				res.send({success: false, message: 'Auth failed. Passwords did not match'})
			}
		});
	}
}