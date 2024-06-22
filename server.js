import express from 'express'
import dotenv from 'dotenv'
import mongose from 'mongoose'
import router from './routes/UserAthu.js'

dotenv.config()


const app = express()


const DB = process.env.DB

mongose.connect(DB)
.then(()=>console.log('DB Connect'))
.catch((error)=>console.log(error))

app.use(express.json())
app.use('/api/user',router)


const Port = process.env.PORT || 6060
app.listen(Port , ()=>{
    console.log(`server is running ${Port}`);
})  