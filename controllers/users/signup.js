const { User } = require("../../models");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");

const signup = async (req, res, next) => {
  const { email, password, subscription, token } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const hashPassword= bcrypt.hashSync(password,bcrypt.genSaltSync(10))
  await User.create({ email,password:hashPassword, subscription, token });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = signup;
