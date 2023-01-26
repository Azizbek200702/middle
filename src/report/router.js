const express = require('express')
const router = express.Router()
const Controller = require('./controller')

router.route('/').get(Controller.addNew)

module.exports = router