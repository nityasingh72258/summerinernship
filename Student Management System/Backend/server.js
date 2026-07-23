import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import route from './routes/studentRoutes.js'

dotenv.config()

const app=express()

app.use(express.json())
connectdb()
 
//route define
app.use('/api/student',route)



//creating server
app.listen(process.env.PORT,()=>{
    console.log('server is runing at port no:',process.env.PORT);
    
})