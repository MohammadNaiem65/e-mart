import type { CreateUser, UpdateUser, UserDocument } from '@/types/user'
import { filterObjectByArray } from '@/lib/utils'

/* DTO = Data Transfer Object
	- To modify or alter any property of an object before send to client.

		- like do don't need all the property to send back to user, just need
				cupple of then so we need only send those only.

		- if we need to modify or alter any property name before send to client
				not modify in database level than can be done in DTO.

				doc = {
					_id,
					createdAt,
					updatedAt,
					_v,
					id
					...
				}

				dto = {
					_id,
					createdAt,
					id
					...
				}

*/


// POST 	/api/auth/register
export const filterBodyForCreateUser = (body: CreateUser) => {
	const allowedFields = [
		// 'customId',
		'name',
		'email',
		'username',
		'password',
		'confirmPassword',
		'avatar',
		'coverPhoto',
		'gender',

		// 'phone',
		// 'role',
		// 'isActive',
		// 'isVerified',

	]

	return filterObjectByArray(body, allowedFields)
}

// user => user._doc
export const filterUserDocument = (user: UserDocument) => {
	const allowedFields = [
		'customId',
		'name',
		// 'email', 							// update by email varification
		// 'password', 						// update by /update-password
		// 'confirmPassword', 		//
		// 'latestMessage', 			// ?
		'avatar',
		// 'role', 								//
		'isActive',
		'isVerified',

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(user, allowedFields)
}


// PATCH 	/api/users/:userId
// PATCH 	/api/users/me
export const filterBodyForUpdate = (body: UpdateUser) => {

	const allowedFields = [
		'name',
		'avatar', 								// need to delete old photo, so use seperate route
		'coverPhoto',
		'gender',
		// 'role',
		'isActive',
		'isVerified',
	]
	return filterObjectByArray(body, allowedFields)
}

