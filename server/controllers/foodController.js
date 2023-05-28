const uuid = require('uuid')
const path = require('path')
const {Food} = require('../models/models')
const ApiError = require('../error/ApiError')

class FoodController {
    async create(req, res, next) {
        try {
            const {name, description, price, shopId} = req.body
            const {img} =req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const food = await Food.create({name, description, price, shopId, img: fileName})
            return res.json(food)
        } catch (e) {
             next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const {shopId} =req.query
        let food;
        if (!shopId) {
            food = await Food.findAll()
        } else {
            food = await Food.findAll({where: {shopId}})
        }
        return res.json(food)
    }

    // async getOne(req, res) {
    //     const {id} = req.params
    //     const food = await Food.findOne(
    //         {
    //             where: {id},
    //             include: [{model: description, as: 'description'}]
    //         }
    //     )
    //     return res.json(food)
    // }
}

module.exports = new FoodController()