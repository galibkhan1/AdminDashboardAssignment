const {User}=require("../models.js/user")

const signup=async(req,res)=>{
    //body extract 

    //check user exists or not 

    //password hashing

    // user register

    const {name,dob,password,email}=req.body;

    const existingUser=await User.findOne({email});

    if(existingUser){
        return res.status(300).json({
            "error":"User already registered"
        })
    }

    const createdUser=await User.create({
        name,
        email,
        dob,
        password
    })

    return res.status(200).json({
        "name":createdUser.name,
        "email":createdUser.email
    })

}

const signin =async(req,res)=>{
    const {password,email} = req.body;
    const existingUser = await User.findOne({email});
    if(!existingUser){
        return res.status(404).json({
            "error":"User Not exist"
        })
    }
    

    if(existingUser.password !== password){
        return res.status(400),json({
            "error":"Password is not valid"
        })
    }
    return res.status(200).json({
        "message":"User loggedIn",
        "user":{
            "name":existingUser.name,
            "email":existingUser.email
        }
    })
}
const getAllUser = async(req,res)=>{
    const users = await User.find({});
    return res.status(200).json({
        "message":"Users fetched successfully",
        "users":users
    })
}

module.exports={
    signup,
    signin,
    getAllUser
}