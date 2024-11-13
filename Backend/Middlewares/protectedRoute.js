import jwt from "jsonwebtoken";
import UserBuild from "../models/user.js";
import { ENV_VARS } from "../config/env.js";

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies["jwt-movie"];

       
        if (!token) {
            return res.status(400).json("No token provided");
        }

       
        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

        // Check if token was decoded successfully
        if (!decoded) {
            return res.status(400).json("Token could not be decoded");
        }

        // Find the user based on the decoded token's userId
        const user = await UserBuild.findById(decoded.userId).select("-password"); // Exclude password field

        // Check if the user exists
        if (!user) {
            return res.status(400).json("No user found");
        }

       
        req.user = user;

        
        next();

    } catch (error) {
        console.log("Error occurred in protected route:", error);
        return res.status(400).json("An error occurred");
    }
};
