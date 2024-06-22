import mongoose from "mongoose";


const userscheema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phone : {
        type : String ,
        required : true
    },
    profile_img : {
        type : String
    },
    accountCreatedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{timestamps : true})

const Users = mongoose.model('Users' , userscheema)

export default Users