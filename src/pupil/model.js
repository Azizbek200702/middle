const mongoose = require("mongoose")

const pupilSchema = mongoose.Schema({
    firstName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    lastName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    middleName : {
        type : String,
        minlength: 3,
        maxlength : 50,
        required :true
    },
    tel : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    exems : {
        type : [],
        default: null
    },
    date : {
        type : String
    },
    dates : [
        {
            come: String,
            back: String
        },
    ],
    group : {
        type: String,
        ref: "group",
        required: true
    },
    payments : {
        type : [
            {
                month: String,
                price: Number,
                date: String
            }
        ],
        default: null
    },

}, { timestamps: true, versionKey: false })

const Pupil = mongoose.model("pupil" , pupilSchema)
module.exports = Pupil