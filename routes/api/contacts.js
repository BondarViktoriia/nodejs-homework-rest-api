const express = require('express')
const createError = require('http-errors')

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
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
