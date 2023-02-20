const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleErrors } = require("../helpers/handleSchemaValidationErrors");

const contactSchemaJoi = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Set name for contact"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
      require: true,
    },
    favorite: {
      type: Boolean,

      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    }
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleErrors);

const Contact = model("contact", contactSchema);

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { contactSchemaJoi, updateFavoriteSchema };
module.exports = { Contact, schemas };
