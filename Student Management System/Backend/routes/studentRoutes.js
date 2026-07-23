import express from 'express'
import { createStd,ReadStd,ReadStdbyId, updateStudent,deleteStudent } from '../Controller/studentController.js'

const route=express.Router()

route.post('/create',createStd)     //http://localhost:5000/api/student/create
route.get('',ReadStd)                //http://localhost:5000/api/student/
route.get('/:id',ReadStdbyId)          //http://localhost:5000/api/student/:id
route.put('/:id',updateStudent)          //http://localhost:5000/api/student/:id
route.delete('/:id',deleteStudent)          //http://localhost:5000/api/student/:id

export default route