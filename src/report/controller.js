const Spending = require("../spending/model");
const Pupil = require("../pupil/model");
const Group = require("../group/model")
const moment = require("moment");

module.exports = {
  addNew: async function (req, res) {
    try {
      const { date } = req.body;
      const dayMonth = moment(date).daysInMonth();
      let report = [];
      const spends = await Spending.aggregate([
        {
          $match: {
            date: {
              $gte: date,
              $lte: moment(date).format(`YYYY-MM-${dayMonth}`),
            },
          },
        },

        {
          $group: { _id: "$title", priceAll: { $sum: "$price" } },
        },
      ]);

      const pupils = await Pupil.aggregate([
        {
          $group: { _id: "$group", total: { $sum: 1 } },
        },
      ]);

      const income = await Pupil.aggregate([
        {
          $unwind: "$payments",
        },
        {
          $match: {
            "payments.date": {
              $gte: date,
              $lte: moment(date).format(`YYYY-MM-${dayMonth}`),
            },
          },
        },
        {
          $group: {
            _id: "$group",
            price: { $sum: "$payments.price" },
          },
        },
      ]);
      await Group.populate(income, {path: "_id", select: "title"} );
      report = [
        { chiqimlar: spends },
        { oquvchilar: pupils },
        { daromad: income },
      ];
      return res.status(200).json(report);
    } catch (error) {
      console.log(error, "sadasdasdasdasdsfiodshugfhisdiofhgdsiohfj");
      return res.status(400).json(error);
    }
  },
};
