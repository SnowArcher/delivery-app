const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    // if (req.method === "OPTIONS") {
    //     next()
    // }
    // try {
    //     const token = req.headers.authorisation.split('')[1]
    //     if (!token) {
    //         return res.status(401).json({message: "The user is not authorized"})
    //     }
    //     const decoded = jwt.verify(token, process.env.SECRET_KEY)
    //     req.user = decoded
    //     next()
    // }
    // catch (e) {
    //     res.status(401).json({message: "The user is not authorized"})
    // }
}