const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{

    const token = req.cookies.token;
    // console.log("Token received:", token);
    if(!token){
        req.auth = false;
        return next();
    }
    try{
        const decodeToken = jwt.verify(token,'Iamgood');
        if(!decodeToken){
            req.auth = false;
            return next();
        }
        req.auth = true;
        req.email = decodeToken.email;
        req.customerId = decodeToken.customerId;
        // console.log("CustomerID from Authentication:", req.customerId);
        // console.log("Email from Authentication:", req.email);

        next();
    }
    catch(err){
        req.auth = false;
        console.log("Error during token verification:");
        console.error("Authorization error:", err);
        return next();
    }
}