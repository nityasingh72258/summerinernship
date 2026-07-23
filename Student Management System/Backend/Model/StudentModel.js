import mongoose from 'mongoose';

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    course:{
        type:String,
        default:"CSE"
    }
},{timestamps:true})

const student=mongoose.model("student",studentSchema)
export default student