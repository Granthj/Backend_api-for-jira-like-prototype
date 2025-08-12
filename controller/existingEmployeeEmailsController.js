const Employee = require('../model/employee');

exports.existingEmployeeEmails = async (req,res)=>{

    try {
        const employees = await Employee.find({}, 'emailEmployee');
        if (!employees || employees.length === 0) {
            return res.status(404).json({ message: "No employees found" });
        }
        const emails = employees.map(emp => emp.emailEmployee);
        return res.status(200).json({ emails });
    } catch (error) {
        console.error("Error fetching employee emails:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}