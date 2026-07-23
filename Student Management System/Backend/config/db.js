import mongoose from 'mongoose';

const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
        console.log("data base connection successfuly");
        
    } catch (error) {
        console.log(error.message);
        process.exit(1)
        
    }
}

export default connectdb