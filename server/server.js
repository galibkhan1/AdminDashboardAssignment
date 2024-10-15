const express = require("express");
const app = express();
const db = require("./db/conn");
const cors = require("cors");
const mainRouter = require("./routes/userRoutes.js");


app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(8000, () => {
    console.log('Server started running on port 8000');
});
