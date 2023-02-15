const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchemaJoi = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite:Joi.boolean()
});


const contactSchema = new Schema({
    name: {
        type: String,
        require: [true,"Name must by exist"]
    },
    email: {
        type: String,
        require: true,
         unique:true,
    },
    phone: {
        type: String,
        unique:true,
        // match: /^(d{3})-\d{3}-\d{4}-\d$/,
        require: true,
    },
    favorite:{
        type: Boolean,

        default:false,
    },
},{versionKey:false,timestamps:true});

const Contact = model("contact", contactSchema);
const schemas = {contactSchemaJoi};
module.exports ={ Contact, schemas};