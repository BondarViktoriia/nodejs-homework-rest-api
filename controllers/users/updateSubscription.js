const { User } = require("../../models");
const createError = require("http-errors");

const updateSubscription = async (req, res) => {
  const { id } = req.params;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json({
    status: "succes",
    code: 200,
    data: { email: result.email, subscription: result.subscription },
  });
};

module.exports = updateSubscription;
