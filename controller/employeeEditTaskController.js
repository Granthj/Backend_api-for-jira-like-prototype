const realtimeUpdate = require("../model/personalTask");
const Employee = require("../model/employee");
exports.EditTask = async (req, res) => {
    if(req.auth){
    const {date,status,notes} = req.body;
    const {taskId} = req.params;
    const employeeEmail = req.email;
    // console.log("EMAIL FROM EDITTASK", employeeEmail);
    if( !notes ){
        return res.status(400).json({message: "Notes fields are required"});
    }
    const employee = await Employee.findOne({emailEmployee: employeeEmail});
    if(!employee){
        return res.status(404).json({message: "Employee not found"});
    }
    const tasks = employee.tasks.id(taskId);
    if(!tasks){
        return res.status(404).json({message: "Task not found"});
    }
    const progress = {
        date,
        status,
        notes,
        updatedBy: employee.emailEmployee
    };
    tasks.progress.push(progress);
    await employee.save();
    return res.status(200).json({message: "Task updated successfully", task: tasks});
}
    
}