const express = require('express')
const router = express.Router()
const pupilController = require("./controller")


router.route('/').post(pupilController.addNew)

router.route('/').get(pupilController.getAll)

router.route('/:id').get(pupilController.getOne)

router.route('/:id').delete(pupilController.delete)

router.route('/:id').put(pupilController.update)

module.exports = router
