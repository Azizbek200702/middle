const Teacher = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let teacher = await Teacher.create(req.body)
            if(!teacher){
                return res.status(400).send("teacher yaratishda hatolik boldi")
            }
            return res.status(201).json(teacher)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let teachers = await Teacher.find({})
           if(!teachers){
            return res.status(400).send("teacherlarni olishda hatolik boldi ")
            }
        return res.status(200).send(teachers)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let teacherId = req.params.id
           let teacher = await Teacher.findOne({_id : teacherId})
           if(!teacher){
            return res.status(400).send("teacherlarni olishda hatolik boldi ")
            }
        return res.status(200).send(teacher)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let teacherId = req.params.id
        let teacher = await Teacher.findByIdAndDelete(teacherId)           
        return res.status(200).send(teacher)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let teacherId = req.params.id
        await Teacher.findByIdAndUpdate(teacherId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}