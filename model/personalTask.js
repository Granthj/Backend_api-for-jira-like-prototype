const mongoose = require("mongoose");
const employee = require("./employee");
const progressSchema = new mongoose.Schema({
  date:{
    type: Date,
    default: Date.now
  },
  status:{type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending'},
  notes:{type:String, required: true},
  updatedBy:{type: String, required: true}
 },{id:false});

 const employeeTaskSchema = new mongoose.Schema({
  title:{type: String, required: true},
  description:{type: String},
  assignDate:{type: Date, default: Date.now},
  endDate:{type: Date, required:true},
  progress:[progressSchema],
 });

 module.exports = employeeTaskSchema;