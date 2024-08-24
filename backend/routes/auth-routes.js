const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers');

router.get("/admins", authControllers.getAllAdmins)

router.post("/admin-login", authControllers.adminLogin)

router.post("/admin-register", authControllers.adminRegister)


module.exports = router;