const dotenv = require("dotenv");
const nodemailer = require("nodemailer");


dotenv.config();

const { META_PASSWORD } = process.env
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "viktoriia.bondar@meta.ua",
    pass: META_PASSWORD,
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmailMeta = async (data) => {
    try {
        const email = { ...data, from: "viktoriia.bondar@meta.ua" };
        await transporter.sendMail(email);
        return true;
    } catch (error) {
        throw error.message;
    }
}

module.exports = sendEmailMeta;

