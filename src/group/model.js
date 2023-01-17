const mongoose = require("mongoose")

const groupSchema = mongoose.Schema({
    title : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    decription : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    }
}, { timestamps: true, versionKey: false })

const Group = mongoose.model("group" , groupSchema)
module.exports = Group