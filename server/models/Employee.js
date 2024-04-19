
const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
        firstName:String ,
        lastName:String,
        dateOfBirth:String,
        gender:String,
        role:String,
        username:String,
        phoneNumber:String,
        email:String,
        password:String,
        confirmPassword:String
})

const EmployeeModel = mongoose.model("Employee",EmployeeSchema)
module.exports = EmployeeModel