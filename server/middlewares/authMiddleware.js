const jwt = require("jsonwebtoken");
const SECRET = "scret"; // Make sure to correct the typo "scret" to "secret"

const authMiddleWare = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1]; // Extract the token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ error: "Unauthorized access" }); // Return 401 if no token is provided
    }

    console.log(token)

    try {
        
        const isVerified = jwt.verify(token, SECRET); // Verify the token
        if(isVerified){
            next();
        }; // Optionally, attach the decoded user info to the request object
        // next(); // Call the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ error: "Unauthorized access" }); // Return 401 if token is invalid
    }
};

module.exports = {
    authMiddleWare
};
