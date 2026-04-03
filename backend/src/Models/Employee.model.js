const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },
   salary:{
    type:String,
    required:true,
   },
  phone:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default: new Date()
  },
   updatedAt:{
    type:Date,
    default: new Date()
  }
})

const employeeModel = mongoose.model("employeeModel", employeeSchema)

module.exports = employeeModel;
