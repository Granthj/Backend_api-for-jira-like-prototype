const User = require('../model/User');
const bcrypt = require('bcrypt');
exports.signup = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        const existsUser = await User.findOne({email});
        if(existsUser){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({name,email,password:hashedPassword});
        await user.save();
    }
    catch(error){
        console.error("Error during signup:", error.message);
        return res.status(500).json({message: "Internal server error"});
    }
    return res.status(201).json({message: "User created successfully"});
}