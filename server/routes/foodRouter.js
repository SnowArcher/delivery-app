const Router = require('express')
const router = new Router()
const foodController = require('../controllers/foodController')

router.post('/', foodController.create)
router.get('/', foodController.getAll)

module.exports = router