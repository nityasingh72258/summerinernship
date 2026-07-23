import student from "../Model/studentmodel.js";

export const createStd=async(req,res)=>{
    try {
        const result= await student.create(req.body)
        res.status(200).json({
            success:true,
            message:'student is created',
          })
        }
        catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}  

//read student
export const ReadStd=async(req,res)=>{
    try {
        const result= await student.find()
        res.status(200).json({
            success:true,
            message:'student is found',
            data:result
          })
        }
        catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

} 

//read student by ID 
export const ReadStdbyId=async(req,res)=>{
    try {
        const result= await student.findById(req.params.id)
        if (!result) {
            res.status(500).json({
            success:true,
            message:'student not found',
          })
        }  
        res.status(200).json({
            success:true,
            message:'student is found',
            data:result
          })
        
        }
        catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

//update student
export const updateStudent=async(req,res)=>{
    try {
        const result= await student.findByIdAndUpdate(req.params.id,
            req.body,{
            new: true,
            runValidators:true
            }
        );
        
        if (!result) {
            res.status(404).json({
            success:false,
            message:'student not found',
          })
        }  
        res.status(200).json({
            success:true,
            message:'student updated successfully',
            data:result
          })
        
        }
        catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
//delete student
export const deleteStudent=async(req,res)=>{
    try {
        const result= await student.findByIdAndDelete(req.params.id,);
        
        if (!result) {
            res.status(404).json({
            success:false,
            message:'student not found',
          })
        }  
        res.status(200).json({
            success:true,
            message:'student delete successfully',
            data:result
          })
        
        }
        catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
