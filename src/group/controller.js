const Group = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let group = await Group.create(req.body)
            if(!group){
                return res.status(400).send("group yaratishda hatolik boldi")
            }
            return res.status(201).json(group)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let groups = await Group.find({})
           if(!groups){
            return res.status(400).send("grouplarni olishda hatolik boldi ")
            }
        return res.status(200).send(groups)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let groupId = req.params.id
           let group = await Group.findOne({_id : groupId})
           if(!group){
            return res.status(400).send("grouplarni olishda hatolik boldi ")
            }
        return res.status(200).send(group)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let groupId = req.params.id
        let group = await Group.findByIdAndDelete(groupId)           
        return res.status(200).send(group)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let groupId = req.params.id
        await Group.findByIdAndUpdate(groupId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}