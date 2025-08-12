const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        // console.log(user,"Login initiated");
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const compare = await bcrypt.compare(password,user.password);
        if(!compare){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign({customerId:user.id,email:user.email},'Iamgood',{
            expiresIn:'1h'
        });
        res.cookie('token',token,{
            httpOnly:true,
            secure:false,
            maxAge:60*60*1000
        });
         return res.status(200).json({
            message: "Login successful",
            customerId: user.id,
            email: user.email
        });
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
    
}