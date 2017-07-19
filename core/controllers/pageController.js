import Page from '../models/Page'


exports.listPages = (req, res) => {
	const db = req.app.get('db');
	const pages = db.get('pages')
	res.json(pages)
}

exports.createPage = (req, res) => {
	const db = req.app.get('db');
	const page = db.get('pages').push(req.body).write()
	res.json(page)
}


exports.editPage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).assign(req.body)
	res.json(page)
}

exports.getPage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).value()
	res.json(page)
}

exports.renderServerPage = (req, res, filePath) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).value()
	// to use with layouts https://www.npmjs.com/package/express-ejs-layouts
	// var locals = {
	//   title: page.seo.title,
	//   description: page.seo.description,
	// };
	// res.render(filePath, locals);
	const param = req.params.param;
	res.render(filePath, {page, param})
}

exports.deletePage = (req, res) => {
	const db = req.app.get('db')
	const page = db.get(`pages[${req.params.id}]`).value()

	res.json(db.get(`pages`).remove(page).write())
}

