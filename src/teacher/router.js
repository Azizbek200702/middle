const express = require('express')
const router = express.Router()
const teacherController = require("./controller")
// const authenticate = require("../util/athenticate")

// router.use(authenticate)
router.route('/').post(teacherController.addNew)

router.route('/').get(teacherController.getAll)

router.route('/:id').get(teacherController.getOne)

router.route('/:id').delete(teacherController.delete)

router.route('/:id').put(teacherController.update)

module.exports = router
