const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
// const createError = require("http-errors");


const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id: id } = req.user;
    const unicAvatarName = `${id}${originalname}`
   try {
     
       const resultUpload = path.join(avatarsDir,unicAvatarName);
       await fs.rename(tempUpload, resultUpload);
       const avatarURL = path.join("public", "avatars", unicAvatarName);
       await User.findByIdAndUpdate(req.user._id, { avatarURL });
       res.json({ avatarURL });

   } catch (error) {
       await fs.unlink(tempUpload);
       throw error;
   }
}

module.exports = updateAvatar;