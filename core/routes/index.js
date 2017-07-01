import express from 'express'


const router = express.Router()

router.get('/', (req, res) => {
	const db = req.app.get('db');
	const siteTitle = db.get('pages').map('title')
	res.json(siteTitle)
});

export default router
