const express =require("express") ;
 const doctor =require("../controllers/doctor") ;
 const router = express.Router();

 router.get("/doctorsbyId/:id", doctor.getDoctorById);
 router.get("/patients", doctor.getPatients);
 router.get("/patients/:id",doctor.getPatientsByDoctorId);
 router.get("/results",doctor.getResults);
 //result
 router.delete("/deleteresult/:id", doctor.deleteResult);
 router.post("/addresult/:id",doctor.addResult);
 router.put('/updateresult/:id',doctor.updateResult);
//result-note
 router.get("/resultnotes",doctor.getResultsNotes);
 router.post("/addresultnote/:id",doctor.addResultNotes);
 router.put('/updateresultnote/:id',doctor.updateResultNotes);
 router.delete("/deleteresultnote/:id", doctor.deleteResultNotes);

 router.get("/patientwithresult/:id",doctor.getPatientWithResult);
module.exports = router;
