import express from 'express'
import pageController from '../controllers/pageController'

const router = express.Router()


router.get('/admin/listPages', pageController.listPages);


router.post('/admin/createPage', pageController.createPage);

router.put('/admin/editPage/:id', pageController.editPage);
router.delete('/admin/deletePage/:id', pageController.deletePage);



export default router
