const { User } = require("../../models");
const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const sendEmail = require("../../helpers/sendEmail");
const { v4 } = require("uuid");

const signup = async (req, res, next) => {
  const { email, password, subscription, token } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, "Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);

  const verificationToken = v4();

  await User.create({
    email,
    password: hashPassword,
    token,
    subscription,
    avatarURL,
    verificationToken,
  });
  const mail = {
    to: email,
    subject: "Confirm register",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}" taget="_blank"> Click for confirmation your email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
