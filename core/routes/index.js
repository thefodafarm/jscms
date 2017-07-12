import express from 'express'
import pageController from '../controllers/pageController'
import userController from '../controller /userController'
import passport from 'passport'

const router = express.Router()


router.get('/admin/listPages', passport.authenticate('jwt', {session: false}), pageController.listPages);
router.post('/admin/createPage', passport.authenticate('jwt', {session: false}), pageController.createPage);
router.put('/admin/editPage/:id', pageController.editPage);
router.delete('/admin/deletePage/:id', pageController.deletePage);

router.post('/admin/register', userController.register);
router.post('/admin/signin', userController.signin);



export default router
