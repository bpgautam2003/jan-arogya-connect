const Doctor = require('../models/doctor-model.js')

const getAllDoctors = async(req, res) => {
    try {
        const doctors = await Doctor.find({}).lean(); 
        res.status(200).json(doctors);
    } catch (error) {
        console.log(error)
    }
}
const addDoctor = async(req, res) => {
    try {
        const {reg_no, contact, year_of_reg, speciality, qualification, education, gender, dob, salary, availability } = req.body;

        const userExist = await Doctor.findOne({ reg_no: reg_no });

        if (userExist) {
            return res.status(400).json({ message: "Doctor Already Exists" })
        }

        const newUser = await Doctor.create({reg_no, contact, year_of_reg, speciality, qualification, education, gender, dob, salary, availability})
        res.status(201).json({ message: "Registration Successful", userId: newUser._id.toString() });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error : Registration Failed" })
    }

}

const editDoctorDetails = async (req, res) => {
    try {
        const { reg_no } = req.params;
        const updateData = req.body;

        const doctor = await Doctor.findOneAndUpdate({ reg_no: reg_no }, updateData, { new: true });

        if (!doctor) {
            return res.status(404).json({ message: "Doctor Not Found" });
        }

        res.status(200).json({ message: "Doctor Details Updated Successfully", doctor });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error: Update Failed" });
    }
};


const deleteDoctor = async (req, res) => {
    try {
        const { reg_no } = req.params;

        const doctor = await Doctor.findOneAndDelete({ reg_no: reg_no });

        if (!doctor) {
            return res.status(404).json({ message: "Doctor Not Found" });
        }

        res.status(200).json({ message: "Doctor Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error: Deletion Failed" });
    }
};

module.exports = {getAllDoctors, addDoctor, editDoctorDetails, deleteDoctor}