// const AdminTask = require('../model/admin');
const Employee = require('../model/employee');
exports.admin = async(req,res)=>{
    console.log("Admin task assignment initiated");
    try{
        const { employeeEmail,title, description, endDate} = req.body;
        if( !employeeEmail || !description || !endDate){
            return res.status(400).json({message: "All fields are required"});
        }
        const task = {
            employeeEmail,
            title,
            description,
            endDate
        };
        const employee = await Employee.findOne({ emailEmployee: employeeEmail });
         if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        employee.tasks.push(task);
        await employee.save();

        return res.status(201).json({message: "Task assigned successfully", task});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({message: "Internal server error"});
    }
}