import mongoose from "mongoose";

const db = async(req, res)=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected")
  } catch (error) {
    console.log(error)
  }
  
}

export default db;