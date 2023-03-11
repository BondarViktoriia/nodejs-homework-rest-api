const dotenv = require("dotenv");
const sgMail = require("@sendgrid/mail");

dotenv.config();

const { SENGRID_API_KEY } = process.env;
sgMail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (data) => {
    try {
        const email = { ...data, from: "viktoriia.shvetsinteravia@gmail.com" };
        await sgMail.send(email);
        return true;
    } catch (error) {
        throw error.message;
 }
}

module.exports = sendEmail;