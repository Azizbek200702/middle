const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
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
    login : {
        type: String,
        required: true
    },
    groups : {
        type: [],
        ref: "group",
        default: null
    },
    role : {
        type: Boolean,
        required: true
    }
}, { timestamps: true, versionKey: false })

const Teacher = mongoose.model("teacher" , teacherSchema)
module.exports = Teacher