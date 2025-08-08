const Employee = require('../model/employee');
const Task = require('../model/task');
exports.employeeTask = async (req,res,next)=>{
    if(req.auth){
    const email = req.email;
    console.log("Email from request:", email);
    if(!email){
        return res.status(401).json({message: "Unauthorized"});
    }
    const employeeDetails = await Employee.findOne({ emailEmployee: email });
    // console.log("Employee details:", employeeDetails);
    if(!employeeDetails.emailEmployee){
        return res.status(404).json({message: "Employee not found"});
    }
    const tasks = employeeDetails.tasks;
    if(tasks.length === 0){
        return res.status(404).json({message: "No tasks found for this employee"});
    }
    res.status(200).json({tasks});
    next();
}
}