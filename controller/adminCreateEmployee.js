const Employee = require('../model/employee');
exports.adminCreateEmployee = async (req, res) => {
    const { emailEmployee } = req.body;
    if (!emailEmployee) {
        return res.status(400).json({ message: "Email is required" });
    }
    try {
        const existingEmployee = await Employee.findOne({ emailEmployee });
        if (existingEmployee) {
            return res.status(400).json({ message: "Employee already exists" });
        }
        const newEmployee = new Employee({ emailEmployee });
        await newEmployee.save();
        return res.status(201).json({ message: "Employee created successfully", employee: newEmployee });
    } catch (error) {
        console.error("Error creating employee:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}