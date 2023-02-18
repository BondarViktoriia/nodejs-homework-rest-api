const { User } = require("../../models");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const passwordCompare = bcrypt.compareSync(password, user.password);
  if (!user || !passwordCompare) {
    throw createError(401, "Email or password is wrong");
  }
};

module.exports = login;
