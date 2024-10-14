const { User } = require("../models.js/user");
const jwt = require("jsonwebtoken");
const SECRET = "scret";

const signup = async (req, res) => {
    try {
        // Body extraction
        const { name, dob, password, email } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                "error": "User already registered"
            });
        }

        // User registration
        const createdUser = await User.create({
            name,
            email,
            dob,
            password
        });

        // Generate token
        const token = await jwt.sign({ name, email }, SECRET);

        return res.status(201).json({
            "name": createdUser.name,
            "email": createdUser.email,
            "access_token": token
        });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({
            "error": "Internal server error"
        });
    }
};

const signin = async (req, res) => {
    try {
        const { password, email } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                "error": "User does not exist"
            });
        }

        // Check password (this should ideally use a hashed password check)
        if (existingUser.password !== password) {
            return res.status(400).json({
                "error": "Invalid password"
            });
        }

        const name = existingUser.name;
        const token = await jwt.sign({ name, email }, SECRET);

        return res.status(200).json({
            "message": "User logged in",
            "user": {
                "name": existingUser.name,
                "email": existingUser.email,
                "access_token": token
            }
        });
    } catch (error) {
        console.error("Error during signin:", error);
        return res.status(500).json({
            "error": "Internal server error"
        });
    }
};

const getAllUser = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({
            "message": "Users fetched successfully",
            "users": users
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            "error": "Internal server error"
        });
    }
};

module.exports = {
    signup,
    signin,
    getAllUser
};
