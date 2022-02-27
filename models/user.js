const mongoose=require('mongoose');
// const { MongoTopologyClosedError } = require('mongoose/node_modules/mongodb');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    }


},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;