import mongoose from "mongoose";


const saloonScheema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : Object,
        required : true
    },
    shop_img : {
        type : String 
    },
    shop_license : {
        type : String
    },
    services : {
         type : [String] ,
         default : ["Hire Cut" , 'Bread' , 'Facial']       
    },
    isSubscription : {
        type : Boolean , 
        default : false
    },
    isSubscription_startdate : {
        type : Date
    },
    isSubscription_enddate : {
        type : Date
    }
}, {timestamps : true})


const Saloon = mongoose.model('Saloon' , saloonScheema)

export default Saloon