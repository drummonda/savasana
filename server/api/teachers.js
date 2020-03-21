const router = require('express').Router()
const { Teacher } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (err) {
    next(err);
  }
})



