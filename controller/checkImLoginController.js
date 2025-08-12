
exports.checkLoginStatus = async(req,res)=>{

    if(req.auth){
        return res.status(200).json({ message: "User is logged in", email: req.email,customerId: req.customerId });
    }
    return res.status(401).json({ message: "User is not logged in" });
}