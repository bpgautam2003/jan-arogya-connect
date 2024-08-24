const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    hrn: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    contact : {
        type : Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type : String,
        require : true
    }
})


const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;