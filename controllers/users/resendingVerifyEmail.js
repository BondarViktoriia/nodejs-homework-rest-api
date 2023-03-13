const { User } = require("../../models/user");
const { RequestError } = require("../../helpers/RequestError");
const sendEmail = require("../../helpers/sendEmail");

const resendingVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(404, "Not found user");
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Confirm register",
    html: `<a href="http://localhost:3000/api/users/verify/${user.verificationToken}" taget="_blank"> Click for confirmation your email</a>`,
  };
  await sendEmail(mail);
  res.json({
    status: "succes",
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = resendingVerifyEmail;
