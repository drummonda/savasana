const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/studios', require('./studios'))
router.use('/teachers', require('./teachers'))
router.use('/classes', require('./classes'))
router.use('/stripe', require('./stripe'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
