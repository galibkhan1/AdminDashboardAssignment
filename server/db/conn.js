const mongoose = require("mongoose")

const connection=mongoose.connect("mongodb+srv://galibkhan1:galibkhan1@cluster0.jv32x.mongodb.net/AdminPanel",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Succesful");
}).catch((e)=>{
    console.log("not connected");
})

