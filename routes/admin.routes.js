const express = require("express") ;
const admin = require("../controllers/admin");

const router = express.Router();

router.get("/doctors",admin.getDoctors);
router.get("/users", admin.getUsers);
router.get("/usersbyId/:id", admin.getUserById);
//doctor
router.post("/adddoctor", admin.addDoctor);
router.delete("/deletedoctor/:id", admin.deleteDoctor);
router.put("/updatedoctor/:id",admin.updateDoctor);
//patient
router.put("/updatepatient/:id",admin.updatePatient);
router.post("/addpatient", admin.addPatient);
router.delete("/deletepatient/:id", admin.deletePatient);


module.exports = router;
