import type { CreateProduct, ProductDocument } from '@/types/product'
import { filterObjectByArray } from '@/lib/utils'


// POST 	/api/products
export const filterBodyForCreateProduct = (body: CreateProduct) => {
	const allowedFields = [
		'user',
		'name',
		'slug',
		'price',
		'coverPhoto',
	]
	return filterObjectByArray(body, allowedFields)
}

// PATCH 	/api/products
export const filterBodyForUpdateProduct = (body: CreateProduct) => {
	const allowedFields = [
		'name',
		'slug',
		'price',
		'coverPhoto',
	]
	return filterObjectByArray(body, allowedFields)
}


// user => user._doc
export const filterProductDocument = (user: ProductDocument) => {
	const allowedFields = [
		'user',
		'name',
		'slug',
		'price',
		'coverPhoto',
		'avatar',
		'role', 								//
		'isActive',
		'isVerified',

		'id',
		'_id',
		'createdAt',
		'updatedAt',
	]
	return filterObjectByArray(user, allowedFields)
}


// // PATCH : to update user._doc
// export const filterBodyForUpdate = (body: UpdateUser) => {
// 	const allowedFields = [
// 		'name',
// 		'avatar', 								// need to delete old photo, so use seperate route
// 		'address',
// 		'gender',

// 		'email', 							// update seperate route to verify email
// 		'phone', 							// update seperate route to verify otp
// 		'role',
// 		'isActive',
// 		'isVerified',

// 		'username',
// 		'password',
// 		'confirmPassword',
// 		'avatar',
// 		'coverPhoto',
// 		'gender',
// 		'location',
// 		'otherPermissions',

// 		'idCardFrontPageImage',
// 		'idCardBackPageImage',
// 		'idCardNumber',
// 		'bankStatementImage',
// 		'accountHolderName',
// 		'accountNumber',
// 		'routingNumber',
// 		'bankName',
// 		'bankBranch',
// 		'status',
// 	]
// 	return filterObjectByArray(body, allowedFields)
// }

