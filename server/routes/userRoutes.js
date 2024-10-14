const express=require("express");
const { signup, signin, getAllUser } = require("../controllers/user");

const router=express.Router();

router.post("/register",signup)
router.post("/signin",signin)
router.get("/getallusers",getAllUser)

module.exports=router;