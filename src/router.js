const express = require('express');
const router = express.Router();
const teacherRouter = require("./teacher/router")
const pupilRouter = require("./pupil/router")
const groupRouter = require("./group/router")
const spendingRouter = require("./spending/router")
const renderRouter = require('./report/router')
const authRouter = require("./auth/router")


router.use('/auth', authRouter);
router.use('/teachers', teacherRouter);
router.use('/reports', renderRouter);
router.use('/pupils', pupilRouter);
router.use('/groups', groupRouter);
router.use('/spendings', spendingRouter);


module.exports = router;