const Admin = require('../model/admin');

exports.adminLogin = async(req, res) => {

    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Email and password are required"});
    }   
    try {
        const admin = await Admin.findOne({ email: email });
        if (!admin) {
            return res.status(404).json({message: "Admin not found"});
        }
        return res.status(200).json({message: "Admin login successful"});
    } catch (error) { 
        console.error("Error during admin login:", error.message);
        return res.status(500).json({message: "Internal server error"});
    }
}