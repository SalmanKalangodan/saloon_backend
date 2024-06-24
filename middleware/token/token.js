import jwt  from 'jsonwebtoken'

export const usertoken  = async (req ,res , next) =>{
    
    const token = req.headers['access_token']

    if(!token) { 
        return res.status(400).json({massege : "please login"})
    }

    jwt.verify(token , process.env.KEY , (err , decode)=>{
        if(err.message === 'jwt expired') {

            const refresh_token = req.headers['refresh_token']

            jwt.verify(refresh_token , process.env.KEY , (err , decode)=>{

                if(err) {
                    return res.status(400).json({message : 'refresh_token found please login'})
                }

                const token = jwt.sign({id : decode.id , name : decode.name}, process.env.KEY,{expiresIn : '2000s'})

                const refresh_token = jwt.sign({id : decode.id , name : decode.name}, process.env.KEY)

                req.userdata = {id : decode.id , name : decode.name}

                return next
            })
        }

        req.userdata = {id : decode.id , name : decode.name}

        return next
    })
} 