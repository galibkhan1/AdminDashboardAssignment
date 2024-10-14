const express=require("express");
const { signup, signin, getAllUser } = require("../controllers/user");
const { authMiddleWare } = require("../middlewares/authMiddleware");

const router=express.Router();

router.post("/register",signup)
router.post("/signin",signin)
router.get("/getallusers",authMiddleWare,getAllUser);

module.exports=router;