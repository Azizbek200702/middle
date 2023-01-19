const express = require('express')
const router = express.Router()
const spendingController = require("./controller")


router.route('/').post(spendingController.addNew)

router.route('/').get(spendingController.getAll)

router.route('/:id').get(spendingController.getOne)

router.route('/:id').delete(spendingController.delete)

router.route('/:id').put(spendingController.update)




module.exports = router
