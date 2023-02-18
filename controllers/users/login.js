const { User } = require("../../models");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCompare = bcrypt.compareSync(password, user.password);
  if (!user || !passwordCompare) {
    throw createError(401, "Email or password is wrong");
    }
    
    const payload = {
        id: user._id
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    })
};

module.exports = login;
