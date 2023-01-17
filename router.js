const express = require('express');
const router = express.Router();
const teacherRouter = require("./src/teacher/router")
const pupilRouter = require("./src/pupil/router")
const groupRouter = require("./src/group/router")
const spendingRouter = require("./src/spending/router")


router.use('/teacher', teacherRouter);
router.use('/pupil', pupilRouter);
router.use('/group', groupRouter);
router.use('/spending', spendingRouter);


module.exports = router;