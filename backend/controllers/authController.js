const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Generate Token
const genarateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"});
};

// @desc Register a new user
exports.register = async (req, res) => {
    try{
        const {name, email, password, avatar, role} = req.body;
        const userExist = await User.findOne({email});
        if(userExist) res.status(400).json({message: "User already exists"});
        const user = await User.create({name, email, password, avatar, role});

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            token: genarateToken(user._id),
            companyName: user.companyName || '',
            companyDescription: user.companyDescription || '',
            companyLogo: user.conpanyLogo || '',
            resume: user.resume || '',
        });

    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}
// @desc login
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user || !await user.matchPassword(password)){
            return res.status(401).json({message: "Invalid credentials"});
        }
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            role: user.role,
            token: genarateToken(user._id),
            companyName: user.companyName || '',
            companyDescription: user.companyDescription || '',
            companyLogo: user.conpanyLogo || '',
            resume: user.resume || '',
        });
    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}
// @desc get logged in user
exports.getMe = async (req, res) => {
    try{
        
    } catch (error){
        console.error(error);
        res.status(500).json({message: error.message});
    }
}
