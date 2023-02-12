const express = require('express');
const createError = require('http-errors');
const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email:Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  phone: Joi.number(),
})

const router = express.Router()

const contactsOperations = require("../../models/contacts")

router.get('/', async (req, res, next) => {
try {
    const contacts = await contactsOperations.listContacts();
  res.json({
    status: 'succes',
    code: 200,
    data: {
      result:contacts
    }
  })
} catch (error) {
  next(error);
}
})

router.get('/:contactId', async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contactsOperations.getContactById(contactId);
    if (!result) {
      throw createError(404,`Contact with id ${contactId} not found`)
    }
    res.json({
      status: 'succes',
      code: 200,
     data:{result}
    })

  } catch (error) {
   next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw createError(400,"Missing required name field")
    
    }
    const result = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
