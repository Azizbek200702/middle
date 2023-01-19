const { default: mongoose } = require("mongoose");
const Pupil = require("./model");

module.exports = {
  addNew: async function (req, res) {
    try {
      let pupil = await Pupil.create(req.body);
      if (!pupil) {
        return res.status(400).send("pupil yaratishda hatolik boldi");
      }
      return res.status(201).send(pupil);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  addArrive: async function (req, res) {
    try {
      const { pupilId, date } = req.body;
      const pupil = await Pupil.findById(pupilId);
      if (!pupil) {
        return res.status(400).send("pupil is not");
      } 
      
      let dat = ""
      if(pupil.dates.length>=1){
        dat = pupil.dates[pupil.dates.length-1];
        if(dat.back == ""){
          dat.back = date
        }else {
          pupil.dates.push({
            come : date,
            back : ""
          })
        }
        await pupil.save()
      }else {
        pupil.dates.push({
          come : date,
          back : ""
        })
        await pupil.save()
      }  
     
    

      return res.status(201).send("succees");
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  getAll: async function (req, res) {
    try {
      let pupils = await Pupil.find({});
      if (!pupils) {
        return res.status(400).send("pupillarni olishda hatolik boldi ");
      }
      return res.status(200).send(pupils);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  getOne: async function (req, res) {
    try {
      let pupilId = req.params.id;
      let pupil = await Pupil.findOne({ _id: pupilId });
      if (!pupil) {
        return res.status(400).send("pupillarni olishda hatolik boldi ");
      }
      return res.status(200).send(pupil);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  delete: async function (req, res) {
    try {
      let pupilId = req.params.id;
      let pupil = await Pupil.findByIdAndDelete(pupilId);
      return res.status(200).send(pupil);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  update: async function (req, res) {
    try {
      let pupilId = req.params.id;
      await Pupil.findByIdAndUpdate(pupilId, req.body);
      return res.status(200).send("success");
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};
