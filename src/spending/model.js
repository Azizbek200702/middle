const mongoose = require("mongoose")

const spendingSchema = mongoose.Schema({
    title : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    price : {
        type : Number,
        required :true
    },
    date : {
        type : String,
        required :true
    }
}, { timestamps: true, versionKey: false })

const Spending = mongoose.model("spending" , spendingSchema)
module.exports = Spending