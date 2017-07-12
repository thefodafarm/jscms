import db from '../db'
import Promise from 'promise'
import bcrypt from 'bcrypt'

export default class user {
	model = {
		email: '',
		password: ''
	}

	constructor(newUser) {
		this.model.id = newUser.id ? newUser.id : db.get('users').size() + 1;
		this.model.email = newUser.email;
		this.model.password = newUser.password;
	}

	const save = () => {
		return User.addUser(this);
	}

	static addUser(newUser) {
		return new Promise((resolve, reject) => {
			const isExist = db.get('users').find({'email': newUser.model.email}).value();
			if(isExist) {
				reject(new Error('Email in use'))
			} else {
				const salt = bcrpyt.genSaltSync();
				const hash = bcrpyt.hashSync(newUser.model.password, salt);

				newUser.model.password = hash;

				db.get('users').push(newUser.model).write();
				resolve(newUser)
			}
		})
	}

	comparePassword(pw, cb) {
		const bool = bcrypt.compareSync(pw, this.model.password);
		cb(null, bool);
	}
}