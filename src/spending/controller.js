const Spending = require("./model")

module.exports = {
    addNew : async function(req, res){
       try{
            let spending = await Spending.create(req.body)
            if(!spending){
                return res.status(400).send("spending yaratishda hatolik boldi")
            }
            return res.status(201).send(spending)
       } catch(err){
            return res.status(400).send(err)
       }
    },
    getAll : async function(req, res){
        try{
           let spendings = await Spending.find({})
           if(!spendings){
            return res.status(400).send("spendinglarni olishda hatolik boldi ")
            }
        return res.status(200).send(spendings)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    getOne : async function(req, res){
        try{
            let spendingId = req.params.id
           let spending = await Spending.findOne({_id : spendingId})
           if(!spending){
            return res.status(400).send("spendinglarni olishda hatolik boldi ")
            }
        return res.status(200).send(spending)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    delete : async function(req, res){
        try{
        let spendingId = req.params.id
        let spending = await Spending.findByIdAndDelete(spendingId)           
        return res.status(200).send(spending)
       } catch(err){
            return res.status(400).send(err)
       }
    },

    update : async function(req, res){
        try{
        let spendingId = req.params.id
        await Spending.findByIdAndUpdate(spendingId , req.body)           
        return res.status(200).send("success")
       } catch(err){
            return res.status(400).send(err)
       }
    }
}