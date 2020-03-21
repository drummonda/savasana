const router = require('express').Router()
const { Class } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const classes = await Class.findAll();
    res.json(classes);
  } catch (err) {
    next(err);
  }
})



