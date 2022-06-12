const express =require("express") ;
 const user =require("../controllers/user") ;
 const router = express.Router();
 

 router.get("/userpayment", user.getUserPayment);
 router.post("/userpayment/:id",user.addUserPayment);
 router.put("/updateuserpayment/:id",user.updateUserPayment);
 router.delete("/deleteuserpayment/:id",user.deleteUserPayment);



module.exports = router;
