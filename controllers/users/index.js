const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendingVerifyEmail = require("./resendingVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  resendingVerifyEmail,
};
