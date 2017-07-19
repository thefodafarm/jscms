import express from 'express'
import passport from 'passport'

import pageController from '../../controllers/pageController'
import userController from '../../controllers/userController'

const router = express.Router()

router.get('/listPages', passport.authenticate('jwt', { session: false }), pageController.listPages);
router.post('/createPage', passport.authenticate('jwt', { session: false }), pageController.createPage);

router.put('/editPage/:id', pageController.editPage);
router.delete('/deletePage/:id', pageController.deletePage);

router.post('/register', userController.register);
router.post('/signin', userController.signin);

export default router
