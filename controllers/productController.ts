import type { RequestHandler } from 'express'
import type { ResponseData } from '@/types/common'
import type { ProductDocument } from '@/types/product'
import { promisify } from 'util'
import { appError, catchAsync } from '@/controllers/errorController'
import { apiFeatures } from '@/lib/utils'
import Product from '@/models/productModel'
import * as fileService from '@/services/fileService'
import * as productDto from '@/dtos/productDtos'
import { isValidObjectId } from 'mongoose'


export const getProducts: RequestHandler = catchAsync(async (req, res, next) => {
	const userId = req.params.userId === 'me' ? req.session?.userId : req.params.userId

	let filter = {}
	if(userId) filter = { user: userId.toString() } 

	const products = await apiFeatures(Product, req.query, filter).populate('user')
	const total = await Product.countDocuments( filter )

	const responseData: ResponseData<ProductDocument[]> = {
		status: 'success',
		total,
		count: products.length,
		data: products,
	}
	res.status(200).json(responseData)
})


export const addProduct: RequestHandler = async (req, res, next) => {
	try {
		if(req.body.coverPhoto) {
			const { error, image: coverPhoto } = await fileService.uploadFile(req.body.coverPhoto, '/products')
			if(error) return next(appError(`coverPhoto image upload error: ${error}`))
			req.body.coverPhoto = coverPhoto
		}

		const filteredBody = productDto.filterBodyForCreateProduct(req.body)
		const product = await Product.create(filteredBody)
		if(!product) return next(appError('create product failed', 400, 'failed'))

		const responseData: ResponseData<ProductDocument> = {
			status: 'success',
			data: product,
		}
		res.status(201).json(responseData)

	} catch (err) {
		setTimeout(() => {
			promisify(fileService.removeFile)(req.body.coverPhoto?.secure_url)
		}, 1000)

		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
}



// => GET /api/products/:productId
export const getProductByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	const productId = req.params.productId

	const filter = (isValidObjectId(productId)) ?  { _id: productId } : { slug: productId }
	const products = await apiFeatures(Product, req.query, filter).limit(1)
	if(!products.length) return next(appError('product not found'))
	// const product = await Product.findOne(filter) 
	// if(!product) return next(appError('product not found'))
	
	const responseData: ResponseData<ProductDocument> = {
		status: 'success',
		data: products[0]
	}
	res.status(200).json(responseData)
})


// => PATCH /api/products/:productId
export const updateProductByIdOrSlug:RequestHandler = async (req, res, next) => {
	try {
		const productId = req.params.productId
		const filter = (isValidObjectId(productId)) ?  { _id: productId } : { slug: productId }
		const product = await Product.findOne(filter) 
		if(!product) return next(appError('product not found'))

		if(req.body.coverPhoto) {
			const { error, image: coverPhoto } = await fileService.uploadFile(req.body.coverPhoto, '/products')
			if(error) return next(appError(`coverPhoto image upload error: ${error}`))

			// update with new image
			req.body.coverPhoto = coverPhoto
		}

		const filteredBody = productDto.filterBodyForUpdateProduct(req.body)
		const updatedProduct = await Product.findOneAndUpdate(filter, filteredBody, { new: true }) 
		if(!updatedProduct) return next(appError('product product found'))
		
		if(req.body.coverPhoto) {
			req.body.coverPhoto = product.coverPhoto 	// add existing coverPhoto, so that it can be deleted later

			// delete old coverPhoto if have
			setTimeout(() => {
				if(product.coverPhoto?.secure_url) promisify(fileService.removeFile)(product.coverPhoto.secure_url)
			}, 1000)
		}

		
		const responseData: ResponseData<ProductDocument> = {
			status: 'success',
			data: updatedProduct
		}
		res.status(201).json(responseData)

	} catch (err) {
		setTimeout(() => {
			if(req.body.coverPhoto?.secure_url) promisify(fileService.removeFile)(req.body.coverPhoto.secure_url)
		}, 1000)

		if(err instanceof Error) next(appError(err.message, 400, 'error'))
		if(typeof err === 'string') next(appError(err, 400, 'error'))
	}
}

// => DELETE /api/products/:productId
export const deleteProductByIdOrSlug:RequestHandler = catchAsync(async (req, res, next) => {
	const productId = req.params.productId

	const filter = (isValidObjectId(productId)) ?  { _id: productId } : { slug: productId }
	const product = await Product.findOneAndDelete(filter) 
	if(!product) return next(appError('product not found'))
	
	// delete existing coverPhoto if have
	setTimeout(() => {
		if(product.coverPhoto?.secure_url) promisify(fileService.removeFile)(product.coverPhoto.secure_url)
	}, 1000)

	const responseData: ResponseData<ProductDocument> = {
		status: 'success',
		data: product
	}
	res.status(204).json(responseData)
})
