exports.listPages = (req, res) => {
	const db = req.app.get('db');
	const pages = db.get('pages')
	res.json(pages)
}

exports.createPage = (req, res) => {
	const db = req.app.get('db');
	const page = db.get('pages').push({title: req.title}).write()
}

exports.editPage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get('pages').find({id: req.id})
}