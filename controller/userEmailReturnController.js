
const User = require('../model/User');
const Employee = require('../model/employee');
exports.userEmailReturn = async (req, res) => {

   const employees = await Employee.find({}, { emailEmployee: 1, _id: 0 }).lean();
   const employeeEmails = employees.map(e => e.emailEmployee);
   console.log("Employees found:", employeeEmails);
    // const employeeEmails = employees
    //         .map(e => e.email?.trim().toLowerCase())
    //         .filter(Boolean);
    const usersNotInEmployees = await User.find(
        { email: { $nin: employeeEmails } }, 
        'email'
    ).lean();
    return res.status(200).json({ usersNotInEmployees });
    // return res.status(401).json({ message: "Unauthorized" });
}
