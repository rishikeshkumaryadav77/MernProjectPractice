import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// register
const register = async (req, res) => {
  try {
    const { name, email, password, role="user" } = req.body;

    // validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // check existing user
    const isExists = await userModel.findOne({ email });
    if (isExists) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};



// login
const login = async (req, res) => {
  try {
    const {email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // check existing user
    const isExists = await userModel.findOne({ email });
    if (!isExists) {
      return res.status(409).json({
        success: false,
        message: "User not exists"
      });
    }

    // hash password
    const hashedPassword = await bcrypt.compare(password, isExists.password);
    if(!hashedPassword){
      return res.status(409).json({
        success: false,
        message: "You have entered wrong password"
      }); 
    }

    // generating token
    const token = jwt.sign({id:isExists._id, role:isExists.role}, process.env.SECRET_KEY)
    res.cookie("Token", token, {
      httpOnly:true,
      secure:false
    })

    return res.status(200).json({
      success: true,
      message: "User Login successfully",
      token 
    });

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// logout
const logout = async(req, res) =>{
  try {
    const token = req.cookies.Token
    if(!token){
      return res.status(409).json({
        success:false,
        message:"You are already Loout!"
      })
    }
    
    res.clearCookie('Token')
    return res.status(401).json({
      message:"Logout Successfull"
    })
    

  } catch (error) {
    console.log(error)
    res.status(409).json({success:false, message:"token issues"})
  }
}
export { register, login, logout };