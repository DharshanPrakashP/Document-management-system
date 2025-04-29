
const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true,
        minLength : [8,"Password must have atleast 8 characters"]
    },
    role : String,
    created_at :{
        type:Date, 
        default: Date.now 

    },
    updated_at :{
        type : Date, 
        default: Date.now 
    }
});
const  UsersModel = mongoose.model('users' , usersSchema);
module.exports = UsersModel;

