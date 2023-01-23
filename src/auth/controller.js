const TeacherModel = require("../teacher/model");
const jwt = require("jsonwebtoken");
module.exports = {
    Login: async function(req, res) {
        try {
            const { tel, password } = req.body;
            const user = await TeacherModel.find({
                tel: tel,
                password: password
            })
            if(!user){
                return res.status(400).send('bunday user mavjud mas')
            }
            const token = jwt.sign(
                {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    middleName: user.middleName,
                    role: user.role
                },
                process.env.TOKEN_KEY,
                {algorithm : "HS256", expiresIn : process.env.TOKEN_EXPIRESIN}
            )
            return res.status(200).json({token})
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}