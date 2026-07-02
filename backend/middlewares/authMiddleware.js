const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect route 
const protect = async (req, resizeBy, next) => {
    try{
        let token = req.headers.authorization

        if(token && token.startWith("Bearer")){
            token = token.split(" ")[1];//Exttract the token

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } else {
            return res.status(401).json({message: "Not authorized, no token"});
        }
    } catch (error){
        return res.status(401).json({message: "Not authorized, invalid token"});
    }
};
module.exports = {protect};