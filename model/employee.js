const mongoose = require("mongoose");
// const taskSchema = require('./task'); // Assuming taskSchema is defined in a separate file
const employeeTaskSchema = require("./personalTask");

const employeeSchema = new mongoose.Schema({
  emailEmployee: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  tasks: [employeeTaskSchema],
}, { timestamps: true });

module.exports = mongoose.model("Employee", employeeSchema);