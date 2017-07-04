import express from 'express'
import pageController from '../controllers/pageController'

const router = express.Router()


router.get('/admin/listPages', pageController.listPages);

router.post('/admin/createPage', pageController.createPage);



export default router
