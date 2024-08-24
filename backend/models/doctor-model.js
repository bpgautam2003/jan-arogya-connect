const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    reg_no: {
        type: String,
        require: true
    },
    contact : {
        type : Number,
        require: true
    },
    year_of_reg: {
        type: Number,
        require: true
    },
    speciality: {
        type : String,
        require : true
    },
    qualification: {
        type : String,
        require : true
    },
    education: {
        type : String,
        require : true
    },
    gender: {
        type : String,
        require : true
    },
    dob: {
        type : String,
        require : true
    },
    salary: {
        type : String,
        require : true
    },
    availability : {
        Monday : {
            type : [String],
            default : []
        },
        Tuesday : {
            type : [String],
            default : []
        },
        Wednesday : {
            type : [String],
            default : []
        },
        Thursday : {
            type : [String],
            default : []
        },
        Friday : {
            type : [String],
            default : []
        },
        Saturday : {
            type : [String],
            default : []
        },
        Sunday : {
            type : [String],
            default : []
        }
    }

})


const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;