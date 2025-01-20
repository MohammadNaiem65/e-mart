import { Router } from 'express'
import { router as fileRouter } from '@/routes/fileRoutes' 
import { router as productRouter } from '@/routes/productRoutes' 
import { router as authRouter } from '@/routes/authRoutes' 
import { router as userRouter } from '@/routes/userRoutes' 


// => / 	(root)
const router = Router()

router.use('/upload', fileRouter)
router.use('/api/products', productRouter)
router.use('/api/auth', authRouter)
router.use('/api/users', userRouter)


export default router
