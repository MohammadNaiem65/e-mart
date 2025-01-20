import type { Document, Model, Query as MongooseQuery } from 'mongoose'

/*
	{{origin}}/api/reviews
		?_page=2
		&_limit=3
		&_sort=-createdAt,user
		&_search= riajul,email,name 					// find text 'riajul' in email, or name or ... any of  field
		&_fields=review,user,createdAt

	const reviews = await apiFeatures(Review, req.query)
*/

type Query = {
  _page?: string
  _limit?: string
  _sort?: string
  _fields?: string
  _search?: string
  _filter?: Record<string, any>
}

type ApiFeatures<T extends Document> = {
  (Model: Model<T>, query: Query, newFilter: Record<string, any>): MongooseQuery<T[], T>
}

export const apiFeatures: ApiFeatures<any> = (Model, query, newFilter = {}) => {
  const page = +(query._page || 1)
  const limit = +(query._limit || 20)
  const skip = page <= 0 ? 0 : (page - 1) * limit

  const sort = query._sort?.toString().trim().split(',').join(' ') || 'createdAt'
  const select = query._fields?.toString().trim().split(',').join(' ') || '-_v'

  const search = query._search?.toString().trim().split(',') || ['', '']
  const [searchValue, ...searchFields] = search
  let searchObj: Record<string, any> = {
    "$or": searchFields.map((field: string) => ({
      [field]: { "$regex": searchValue, "$options": "i" }
    }))
  }
  searchObj = search[1] ? searchObj : {}

  const _filter = { ...query._filter, ...newFilter }
  const filter = { ...searchObj, ..._filter }

  // Return the Mongoose query object
  return Model.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .select(select)
}
