const express = require("express");
const app = express();
const db = require("./db/conn");
const cors = require("cors");
const mainRouter = require("./routes/userRoutes.js");

// CORS configuration to allow all origins
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

app.use(express.json());

app.use("/api/v1", mainRouter);

app.listen(8000, () => {
    console.log('Server started running on port 8000');
});
