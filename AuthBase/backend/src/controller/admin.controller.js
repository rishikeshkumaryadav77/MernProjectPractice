import userModel from "../models/user.model.js"

const getAllUsers = async(req, res) =>{
  try {
    if(req.user.role !== "admin"){
      return res.status(401).json({message:"You don't have access to Se all users"})
    }

    const AllUsers = await userModel.find()
    if(!AllUsers){
      return res.status(401).json({message:"Users Not Available"})
    }

    res.status(200).json({message:"fetch all users from database", AllUsers})
  
  } catch (error) {
    
  }
  
}

const deleteUsers = async(req, res) =>{
  try {

    if(req.user.role != "admin"){
      return res.status(401).json({message:"You don't have access to delete the users"})
    }

    const id = req.params.id

    const checkAdmin = await userModel.findById(id)
    if(!checkAdmin){
      return res.status(401).json({message:"Users not found in database!"})
    }

    if(checkAdmin.role === "admin"){
      return res.status(401).json({message:"You can't delete Your self"})
    }



    await userModel.findByIdAndDelete(id)
    
    
    res.status(200).json({message:"User Deleted Successful"})
  } catch (error) {
    console.log(error)
    res.status(401).json({message:"internal issues"})
    
  }
  
}


export {getAllUsers, deleteUsers}