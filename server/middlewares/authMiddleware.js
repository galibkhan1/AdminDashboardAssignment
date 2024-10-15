const jwt = require("jsonwebtoken");
const SECRET = "scret";

const authMiddleWare = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ error: "Unauthorized access" });
    }

    console.log(token)

    try {
        
        const isVerified = jwt.verify(token, SECRET);
        if(isVerified){
            next();
        }; 
    } catch (err) {
        return res.status(401).json({ error: "Unauthorized access" }); 
    }
};

module.exports = {
    authMiddleWare
};
