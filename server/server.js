const express= require("express");
const app= express();
const db=require("./db/conn");
const cors=require("cors");
const mainRouter=require("./routes/userRoutes.js")

app.use(cors());

app.use(express.json());

app.use("/api/v1",mainRouter)

app.listen('8000',()=>{
    console.log('server started running on port 8000')
})