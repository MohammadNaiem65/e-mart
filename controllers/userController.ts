import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { UserDocument } from '@/types/user'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import { promisify } from 'node:util'
import User from '@/models/userModel'
import * as fileService from '@/services/fileService'
import * as tokenService from '@/services/tokenService'
import * as userDtos from '@/dtos/userDtos'

export const getAllUsers: RequestHandler = catchAsync( async (req, res, next) => {
	let filter = {}
	const users = await apiFeatures(User, req.query, filter)
	const total = await User.countDocuments( filter )
	
	const responseData: ResponseData<UserDocument[]> = {
		status: 'success',
		count: users.length,
		total,
		data: users,
	}
	res.status(200).json( responseData )
})


// GET /api/users/:userId
export const getUserById:RequestHandler = catchAsync(async (req, res, next) => {
	const userId = req.params.userId
	const filter = { _id: userId }

	// const users = await apiFeatures(User, req.query, filter).limit(1)
	// if(!users.length) return next(appError('user not found'))

	const user = await User.findOne(filter)
	if(!user) return next(appError('user not found'))
	
	const responseData: ResponseData<UserDocument> = {
		status: 'success',
		data: user
		// data: users[0]
	}
	res.status(200).json( responseData )
})


// GET /api/users/me 		: router.get('/me', authController.protect, userController.addUserId, userController.getUserById)
export const addUserId:RequestHandler = catchAsync(async (req, res, next) => {
	req.params.userId = req.session?.userId

	next()
})



// PATCH /api/users/:userId
export const updateUserById:RequestHandler = catchAsync(async (req, res, next) => {
	try {
		const userId = req.params.userId
		// const filter = { _id: userId }

		const user = await User.findById(userId)
		if(!user) return next(appError('user not found'))

		if(req.body.avatar) {
			const { error, image: avatar } = await fileService.uploadFile(req.body.avatar, '/users')
			if(error) return next(appError(`avatar image upload error: ${error}`))

			// update with new image, if update fialed then delete this image from catch block
			req.body.avatar = avatar
		}

		const filteredBody = userDtos.filterBodyForUpdate(req.body)
		const updatedUser = await User.findByIdAndUpdate(userId, filteredBody, { new: true })
		if(!updatedUser) return next(appError('user update failed'))

		if(req.body.avatar) {
			req.body.avatar = user.avatar 	// add existing avatar, so that it can be deleted later

			// delete old avatar if have
			setTimeout(() => {
				if(user.avatar?.secure_url) promisify(fileService.removeFile)(user.avatar.secure_url)
			}, 1000)
		}

		const responseData: ResponseData<UserDocument> = {
			status: 'success',
			data: updatedUser
		}

		res.status(200).json( responseData )

	} catch (err: unknown) {
		setTimeout(() => {
			if(req.body.avatar?.secure_url) promisify(fileService.removeFile)(req.body.avatar.secure_url)
		}, 1000)

		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
})


// DELETE /api/users/:userId
export const deleteUserById:RequestHandler = catchAsync(async (req, res, next) => {
	const userId = req.params.userId

	const user = await User.findByIdAndDelete(userId)
	if(!user) return next(appError('user not found'))

	// delete existing avatar if have
	setTimeout(() => {
		if(user.avatar?.secure_url) promisify(fileService.removeFile)(user.avatar.secure_url)
	}, 1000)

	// logout user
	await tokenService.removeTokenFromCookie(req)

	const responseData: ResponseData<UserDocument> = {
		status: 'success',
		data: user
	}
	res.status(204).json( responseData )

})