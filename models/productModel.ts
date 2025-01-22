import type { Model } from 'mongoose'
import type { ProductDocument } from '@/types/product'
import { model, Schema } from 'mongoose'
import { Collection } from '@/types/constants'
import { sanitizeSchema } from '@/services/sanitizeService'
import slug from 'slug'

/*
{
	"user" : "",
	"name" : "",
	"slug_1" : "",
	"price" : 300,

	"coverPhoto_1": "https://...",
	"coverPhoto": "data:image/jpg;...",
}
*/

const productSchema = new Schema<ProductDocument>({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	slug: { 							// create from name property via pre('save') hook 
		type: String,
		unique: true,
		trim: true,
		lowercase: true,
		default: '',
	},

	price: {
		type: Number,
		required: true,
		min: 0
	},

	coverPhoto: {
		public_id: {
			type: String,
			// required: true,
		},
		secure_url: {
			type: String,
			// required: true,
		}
	}

})


productSchema.plugin(sanitizeSchema)

productSchema.pre('save', function(next) {
	this.price = +this.price 								// convert to number
	// this.quantity = +this.quantity

	const slugString = this.slug.trim() ? this.slug : this.name
	this.slug = slug(slugString, { lower: true })

	next()
})


// => use constansts
const Product = model<ProductDocument, Model<ProductDocument>>(Collection.Product, productSchema)
export default Product


