const jwt = require('jsonwebtoken')
const blurbird = require('bluebird')

blurbird.promisifyAll(jwt)
module.exports = async function(req , res, next){
    try {
        const Token = req.headers["authorization"]
        if(Token){
            const tokens = Token.split(" ")
            const tokenJwt = tokens[1]
            let decode = await jwt.verifyAsync(
                tokenJwt, process.env.TOKEN_KEY
            )
            if(!decode){
                return res.status(403).send('Auth decode mavjud emas')
            }
            req.user = decode
            return next()
        }
        return res.status(403).send('Token none')
    } catch (error) {
        return res.status(403).send("Authda xatolik yuz berdi")
    }
}