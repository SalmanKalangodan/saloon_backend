import bcrypt from 'bcrypt'
import Users from '../../../model/UserModle.js'
import jwt from 'jsonwebtoken'


export const login = async (req , res) => {

    const login_data = req.body

    const user = await Users.findOne({email : login_data.email })

    if(!user) {
        return res.status(404).json({message : "user not found please register"})
    }
    
    const strpassword = login_data.password.toString()

     bcrypt.compare(strpassword, user.password , (err , result)=>{

        if (err) throw err

        if(result){
           const token  = jwt.sign({id : user._id , name : user.name},process.env.KEY,{expiresIn : '2000s'})
           const refresh_token = jwt.sign({id : user._id ,name : user.name} ,process.env.KEY)

           res.cookie ('access_token' , token)
           res.cookie ('refresh_token' , refresh_token)

           return res.status(200).json({token , refresh_token})
        }else {
            return res.status(400).json('invalid password')
        }

     })

}