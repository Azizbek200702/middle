const express = require('express')
const router = express.Router()
const pupilController = require("./controller")


router.route('/').post(pupilController.addNew)

router.route('/').get(pupilController.getAll)

router.route('/:id').get(pupilController.getOne)

router.route('/:id').delete(pupilController.delete)

router.route('/:id').put(pupilController.update)



router.route('/group').post(pupilController.getClass)

router.route('/payment').post(pupilController.addPayment)

router.route('/attendance').post(pupilController.addArrive)


module.exports = router
