const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // name: {type: DataTypes.STRING},
    // email: {type: DataTypes.STRING, unique: true,},
    // password: {type: DataTypes.STRING},
    // address: {type: DataTypes.STRING},
    // phone: {type: DataTypes.STRING},
    // role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketFood = sequelize.define('basket_food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Food = sequelize.define('food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    shopId: {type: DataTypes.INTEGER, allowNull: false}
})

const Shop = sequelize.define('shop', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const ShopFood = sequelize.define ('shop_food', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}}
)

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketFood)
BasketFood.belongsTo(Basket)

Shop.belongsToMany(Food, {through: ShopFood})
Food.belongsTo(Shop, {through: ShopFood})

Food.hasMany(BasketFood) // check
BasketFood.belongsTo(Food)

module.exports = {
    User,
    Basket,
    BasketFood,
    Food,
    Shop,
    ShopFood
}