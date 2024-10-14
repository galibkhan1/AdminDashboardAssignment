const mongoose=require("mongoose");

const userModel={
    name:{
        type:String,
        required:true,
        trim:true

    },
    email:{
        type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
    }
}

const User=mongoose.model('User',userModel);

module.exports={
    User
}