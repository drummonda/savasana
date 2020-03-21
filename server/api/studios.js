const router = require('express').Router()
const { Studio } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const studios = await Studio.findAll();
    res.json(studios);
  } catch (err) {
    next(err);
  }
})



