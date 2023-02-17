const { User } = require("../../models");
const createError = require("http-errors");


const signup = async (req, res, next) => {
    const { email,password,subscription,token } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw createError(409, "Email in use");
    }
    
    await User.create({ email, password, subscription, token });
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
           user: {
                email,
                subscription
           }
        }
    })

}

module.exports = signup;