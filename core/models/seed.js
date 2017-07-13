import bcrypt from 'bcrypt'
const defaultdb = {
	pages: [
		{
			title: 'just.is',
			content: [{className: 'wrapper', body: 'lorem ipsum'}]
		}
	],

	users: [
		{
			id: 1,
			email: 'admin',
			saltedPass: bcrypt.hashSync('letmein', bcrypt.genSaltSync())
		}
	]
}

export default defaultdb;