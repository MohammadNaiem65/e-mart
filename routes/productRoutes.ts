import * as productController from '@/controllers/productController'
import { Router } from 'express'

export const router = Router({ mergeParams: true })

// => /api/products
router.route('/')
	.get(productController.getProducts)
	.post(productController.addProduct)

router.route('/:productId')
	.get(productController.getProductByIdOrSlug)
	.patch(productController.updateProductByIdOrSlug)
	.delete(productController.deleteProductByIdOrSlug)


