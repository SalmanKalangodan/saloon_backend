import Users from "../../model/UserModle.js"
import bcrypt from 'bcrypt'


export const register = async (req , res) =>{

    const userdata = req.body

    const user = await Users.findOne({name : userdata.name , email : userdata.email})

    if(user) { 
        return res.status(401).json("user alredy registerd")
    }
    const password = userdata.password.toString()

    const hashpassword = await bcrypt.hash(password , 10)
    
    const newUser = new Users({
        name : userdata.name,
        email : userdata.email,
        password : hashpassword,
        phone: userdata.phone,
    })

    await newUser.save()

    return res.status(201).json("register successfuly")
}



export const login = async (req , res) => {
    
}


