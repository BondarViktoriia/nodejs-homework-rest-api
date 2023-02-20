// const {User}= require("../../models")
const getCurrentUsers = async (req, res) => {
    const { email, subscription } = req.user;
    res.json({
        status: "success",
        code: 200,
        data: {
            user: {
                email,
                subscription
            }
        }
    })
}

module.exports = getCurrentUsers;