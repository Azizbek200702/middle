const express = require('express')
const router = express.Router()
const groupController = require("./controller")


router.route('/').post(groupController.addNew)

router.route('/').get(groupController.getAll)

router.route('/:id').get(groupController.getOne)

router.route('/:id').delete(groupController.delete)

router.route('/:id').put(groupController.update)

module.exports = router
