const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const shopRouter = require('./shopRouter')
const foodRouter = require('./foodRouter')

router.use('/user', userRouter)
router.use('/shop', shopRouter)
router.use('/food', foodRouter)

module.exports = router