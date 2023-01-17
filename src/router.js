const express = require('express');
const router = express.Router();
const teacherRouter = require("./teacher/router")
const pupilRouter = require("./pupil/router")
const groupRouter = require("./group/router")
const spendingRouter = require("./spending/router")


router.use('/teacher', teacherRouter);
router.use('/pupil', pupilRouter);
router.use('/group', groupRouter);
router.use('/spending', spendingRouter);


module.exports = router;