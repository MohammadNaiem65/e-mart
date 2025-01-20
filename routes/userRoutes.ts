// import passport from 'passport'
import { Router } from 'express'
import * as userController from '@/controllers/userController'
import * as authController from '@/controllers/authController'
import { router as productRouter } from '@/routes/productRoutes'


// => /api/users/
export const router = Router()

router.get('/me', authController.protect, userController.addUserId, userController.getUserById)
router.patch('/me', authController.protect, userController.addUserId, userController.updateUserById)
router.delete('/me', authController.protect, userController.addUserId, userController.deleteUserById)


router.use('/:userId/products', productRouter)

router.route('/')
	// .get(userController.getAllUsers)
	// .get(authController.protect, userController.getAllUsers)
	.get(authController.protect, authController.restrictTo('user', 'admin'), userController.getAllUsers)

router.route('/:userId')
	.get(userController.getUserById)
	.patch(userController.updateUserById)
	.delete(userController.deleteUserById)
