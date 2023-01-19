const express = require('express');
const router = express.Router();
const teacherRouter = require("./teacher/router")
const pupilRouter = require("./pupil/router")
const groupRouter = require("./group/router")
const spendingRouter = require("./spending/router")


router.use('/teachers', teacherRouter);
router.use('/pupils', pupilRouter);
router.use('/groups', groupRouter);
router.use('/spendings', spendingRouter);


module.exports = router;