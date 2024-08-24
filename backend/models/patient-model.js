const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    patient_id : {
        type : String,
        require : true
    },
    age: {
        type: Number,
        require: true
    },
    contact: {
        type: Number,
        require: true
    },
    weight : {
        type : Number
    },
    height: {
        type: Number
    },
    doc_assigned : {
        type : String,
        default : "General"
    }
})


const patient = new mongoose.model("Patient", patientSchema);

module.exports = patient;