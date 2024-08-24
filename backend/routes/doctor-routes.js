const express = require('express');
const {getAllDoctors, addDoctor, deleteDoctor, editDoctorDetails } = require('../controllers/doctor-controller.js');
const router = express.Router();

router.get("/", getAllDoctors)
router.post("/add-doctor", addDoctor)
router.delete("/delete-doctor/:reg_no", deleteDoctor)
router.put("/edit-doctor/:reg_no", editDoctorDetails)

module.exports = router;