## NGen IT

<!-- ![absolutePath_vs_relativePath.png](https://github.com/JavaScriptForEverything/nodejs-typescript-project-with-import-alias/blob/main/public/absolutePath_vs_relativePath.png) -->


###### Method-1: (Regular) Project Setup
```
# make sure mongodb is running on (default) port 27017
$ sudo systemctl status mongod 	                        # on Linux Check database status

$ git clone https://github.com/JavaScriptForEverything/ngenit.git

$ yarn install
$ yarn dev

$ yarn build
$ yarn start
```

###### Method-2: (Docker) Project Setup
```
# make sure docker and docker socket deamon running
$ sudo systemctl status docker docker.socket 	

$ docker compose build
$ docker compose up --detach                            # 
$ docker compose stop
$ docker compose start

$ docker compose config --services 	                # => backend ...
$ docker compose logs --follow backend                  # See backend logs continuously
```




## Document Section:

### Common 4 type of Error Handling
1. Nodejs Error
2. Express Error
3. MongoDB Error
4. JsonWebToken Error

#### Nodejs Error
- Handled Node.js has 2 type of error:
	- Synchronous Error (Globally):
		- **code**: *throw 'Test synchronous error handler'*
		- **code**: *throw new Error('Test synchronous error handler')*

	- ASynchronous Error (Globally)
		- **code**: *Promise.reject('Test Asynchronous Error handler')*
		- **code**: *Promise.reject(new Error('Test Asynchronous Error handler'))*
	



### Express Error
Express has it's own built-in Global Error handler
- Uses Express Global Error handler
- Handled Route NotFound error

### Database Error
Database has common 4 type of errors 
- DBConnection Error 				: handled
- Invalid Id Error 		(CastError)	: provide simple message instead of technical mesage
- Duplicate Error 		(11000) 	: 	" 			" ....
- Validation Error 	       (ValidationError):  	" 			" ....


### Routes

- GET /api/auth/register 		        : Local Register
- GET /api/auth/login 			        : Local Login
- GET /api/auth/logout 			        : logout local 
- GET /api/auth/google 			        : Google Login
		

<!-- - POST 	/api/auth/update-email 		        : Send request to update email by new email  -->
<!-- - GET 	/api/auth/update-email/:resetToken 	: handle update email from google link click -->


- GET /api/users                                : protected 
<!-- - DELETE /api/users/:id -->

- GET /api/products
<!-- - POST /api/products -->

<!-- - GET /api/reviews -->
<!-- - POST /api/reviews -->


### Login and Registration
We can login multiple ways:
- Local Login: 
- Google Login: 
- Facebook Login: 




### Auth Routes
- POST 	{{origin}}/api/auth/register                                    : Allowed Origin: `http://localhost:3000`
- POST 	{{origin}}/api/auth/login                                         
- POST 	{{origin}}/api/auth/logout                                        
- GET 	{{origin}}/api/auth/google                                        


##### Send `cookie` with every request: (smaple code)
```
const body = {
  "name": "Unknown abc",
  "email": "abc@gmail.com",
  "password": "{{pass}}",
  "confirmPassword": "{{pass}}",

  "avatar": "https://.../dockarize-nodejs-application.png",     : Method-1: url image
  "avatar" : "data:image/gif;base64,R/XBs/fNwfjZ0frl"           : Method-2: image as dataUrl
}

try {
	const res = await fetch(`${origin}/api/auth/register`, {
		method: 'POST',                             (*)
                credentials: 'include',                     (*) : for CORS must need
		body: JSON.stringify( body ),
		headers: {
			'content-type': 'application/json', (*) :   
			'accept': 'application/json',
		}
	})
	if( !res.ok ) throw await res.json()

	const data = await res.json()
	console.log(data)

} catch( err ) {
	console.log(err)
}

```




### User Routes
- GET 	{{origin}}/api/users                                    : 
- GET 	{{origin}}/api/users/:userId                            : Get user By userId
- GET 	{{origin}}/api/users/me                                 : Get LogedIn User 

- PATCH {{origin}}/api/users/:userId                            : Update user By userId
- PATCH {{origin}}/api/users/me                                 : Update LogedIn User 

- DELETE {{origin}}/api/users/:userId                           : Delete user By userId
- DELETE {{origin}}/api/users/me                                : Delete LogedIn User 


##### Update User 
```
body {
  "name": "riajul islam",
  "avatar": "https://.../dockarize-nodejs-application.png",     : Method-1: url image
  "avatar" : "data:image/gif;base64,R/XBs/fNwfjZ0frl"           : Method-2: image as dataUrl
}

PATCH 	{{origin}}/api/users/678ccafec4c838b7feae04c6   	: Update User by id
PATCH 	{{origin}}/api/users/me   	                        : Update logedIn User
```




### Product Routes
- GET 	{{origin}}/api/products                                 : Get all products
- GET 	{{origin}}/api/users/me/products                        : Get all products of LogedIn User 
- GET 	{{origin}}/api/users/:userId/products                   : Get all products of given User's products

- GET 	{{origin}}/api/products/:productId                      : Get product by `product.id`
- GET 	{{origin}}/api/products/product-using-unique-slug       : Get product by `product.slug` for **SEO** and **Clean URL**

- PATCH {{origin}}/api/products/:productId                      : Update product by `product.id`
- PATCH {{origin}}/api/products/product-using-unique-slug       : Update product by `product.slug` 

- DELETE {{origin}}/api/products/:productId                     : Delete product by `product.id`
- DELETE {{origin}}/api/products/product-using-unique-slug      : Delete product by `product.slug` 





##### Add Product
```
body {
  "user": "67888b616dd724cbcbc82ed1",
  "name": "product created by fiaz, which is one updated one",
  "price": 800,
  "coverPhoto": "https://yourdomain/myimage.png", 		: Method-1: to upload image with url 	[ make sure has cors origin allowed ]
  
  "coverPhoto" : "data:image/gif;base64,R0lGODlh..." 		: Method-2: to upload image as dataURL
}

POST 	{{origin}}/api/products    			        : 
```


##### Convert Image to `dataURL`
```
export const readAsDataURL = (file, { type='image' } = {}) => {
	return new Promise((resolve, reject) => {

		if(type === 'image') {
			const isImage = file?.type.match('image/*')
			if(!isImage) return reject(new Error('Please select an image') )
		}

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.addEventListener('load', () => {
			if(reader.readyState === 2) {
				resolve(reader.result)
			}
		})
		reader.addEventListener('error', reject)
	})
}

const dataUrl = await readAsDataURL(evt.target.files[0]) 	: => data:image/gif;base64,R0lGODlh...
```

##### Update Product
```
body {
  "user": "67888b616dd724cbcbc82ed1", 			: can't be updated or removed

  "name": "product created by fiaz updated ",           : Remember this field is `unique`, so choose unique name.
  "price": 800,
  "coverPhoto": "https://yourdomain/myimage.png", 	: Method-1: to upload image with url 	[ make sure has cors origin allowed ]
  
  "coverPhoto" : "data:image/gif;base64,R0lGODlh..." 	: Method-2: to upload image as dataURL
}

PATCH 	{{origin}}/api/products/product-id-or-slug    	: 
```



## API Features 

- limit                                 : ?_limit=4
- pagination                            : ?_limit=4&_page=2
- filtering (limited fields)            : ?_fields=name,user,...
- sorting                               : ?_sort=-price                 : Search by price field   [ - means decending order ]
- searching                             : ?_search=my product,name      : Search 'my product' on `name` field


NB. `API Features` will work on every routes's **GET** request

- GET {{origin}}/api/products
- GET {{origin}}/api/users
- ...


```
{{origin}}/api/products
	?_page=2
	&_limit=3
	&_filter[category]=pant
	&_sort=-createdAt,price 						# field1,field2,...
	&_search=awesome product,name,summary,description 			# find text 'awesome product' in name, or summary or description any of  field
	&_fields=name,summary,price 			                        # only get those 3 fields + populated + build-in fields


http://localhost:5000/api/products?_limit=3&_page=2&_search=awesome product,name,summary,description&_sort=-createdAt,price&-fields=name,summary,price

```


##### Limits of products

```
Syntax:
        _limit = N
```

```
GET     {{origin}}/api/products?_limit=2

{
  "status": "success",
  "total": 5,
  "count": 2,
  "data": [
    {
      "_id": "67887e591bfa38d2b563a5c9",
      "name": "product-1",
      "slug": "",
      "price": 650,
      "coverPhoto": {
        "public_id": "4a622cdd-cb37-45aa-971e-927d52b6edcd",
        "secure_url": "/upload/products/251088bd-36a3-4381-b00d-40c7a806ff6e.gif"
      },
      ...
    },
    { ...  }
  ]
}
```

##### Pagination

```
Syntax:
        _limit  = N
        _page   = N                     : To use pagination must have _limit    [ default _limit = 10 ]
```

```
GET     {{origin}}/api/products?_limit=2&_page=3

{
  "status": "success",
  "total": 5,
  "count": 1,
  "data": [
    {
      "coverPhoto": {
        "public_id": "7dff6bad-f677-475e-80c5-2ac2ecb7f2eb",
        "secure_url": "https://raw.githubusercontent.com/JavaScriptForEverything/babur-hat/refs/heads/main/public/images/dockarize-nodejs-application.png"
      },
      "_id": "67888c0f6dd724cbcbc82ed8",
      "user": "67888b616dd724cbcbc82ed1",
      "name": "product created by fiaz, which is one updated one",
      "slug": "product-created-by-fiaz-which-is-one-updated-one",
      "price": 800,
      "__v": 0
    }
  ]
}
```



##### filtering (limited fields)

NB:
- Negetive means remove fields,
- No Negetive `(Positive)` means only fetch fields,
- Mixture both Negetive  & Positive not allowed, [ use only one at a time ]     :ex. _fields=-name,user        : mixtured not allowed


```
Syntax:
        _fields = field_name_1,field_name_2,...
```

```
GET     {{origin}}/api/products?_fields=name,user

{
  "status": "success",
  "total": 5,
  "count": 5,
  "data": [
    {
      "_id": "67887e591bfa38d2b563a5c9",
      "name": "product-1"
    },
    {
      "_id": "678884021bfa38d2b563a5d7",
      "name": "product-2"
    },
    {
      "_id": "678887c14ee156faebc47ddb",
      "user": "67887eb31bfa38d2b563a5ce",
      "name": "this product is using this unique slug"
    },
    {
      "_id": "67888bee6dd724cbcbc82ed6",
      "user": "67888b616dd724cbcbc82ed1",
      "name": "product created by riaz, which is one"
    },
    {
      "_id": "67888c0f6dd724cbcbc82ed8",
      "user": "67888b616dd724cbcbc82ed1",
      "name": "product created by fiaz, which is one updated one"
    }
  ]
}



GET     {{origin}}/api/products/678887c14ee156faebc47ddb
GET     {{origin}}/api/products/678887c14ee156faebc47ddb?_fields=-coverPhoto

{
  "status": "success",
  "data": {
    "_id": "678887c14ee156faebc47ddb",
    "user": "67887eb31bfa38d2b563a5ce",
    "name": "this product is using this unique slug",
    "slug": "this-product-is-using-this-unique-slug",
    "price": 300,
    "__v": 0
  }
}
```





##### Sorting By any field name

NB:
- Negetive means remove fields,
- No Negetive `(Positive)` means only fetch fields,
- Mixture both Negetive  & Positive not allowed, [ use only one at a time ]     :ex. _fields=-name,user        : mixtured not allowed


```
Syntax:
        _sort = field_name_1                    : Positive sort A-Z order
        _sort = -field_name_1                   : Negetive prefix (-) sort Z-A order
```

```
GET     {{origin}}/api/products?_fields=name,user,price&_sort=-price

{
  "status": "success",
  "total": 5,
  "count": 5,
  "data": [
    {
      "_id": "67888c0f6dd724cbcbc82ed8",
      "user": "67888b616dd724cbcbc82ed1",
      "name": "product created by fiaz, which is one updated one",
      "price": 800
    },
    {
      "_id": "67887e591bfa38d2b563a5c9",
      "name": "product-1",
      "price": 650
    },
    {
      "_id": "678884021bfa38d2b563a5d7",
      "name": "product-2",
      "price": 300
    },
    {
      "_id": "678887c14ee156faebc47ddb",
      "user": "67887eb31bfa38d2b563a5ce",
      "name": "this product is using this unique slug",
      "price": 300
    },
    {
      "_id": "67888bee6dd724cbcbc82ed6",
      "user": "67888b616dd724cbcbc82ed1",
      "name": "product created by riaz, which is one",
      "price": 200
    }
  ]
}
```



##### search with fields

```
Syntax:
        _search = search_value,field_name_to_search_on                          : 

NB: No space between 2 arguments, just seperate by comma but search value can use space
```


```
GET     {{origin}}/api/products?_search=product 1,name                          : search on `name` field
GET     {{origin}}/api/products?_search=product 1,slug                          : search on `slug` field
...
GET     {{origin}}/api/products?_search=product 1,slug&_fields=-coverPhoto      : search & filter       [ Negetive means remove fields ]
```

