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
    dates : {
        type: [],
        default: null
    },
    group : {
        type: String,
        ref: "group",
        required: true
    }
}, { timestamps: true, versionKey: false })

const Pupil = mongoose.model("pupil" , pupilSchema)
module.exports = Pupil