import jwt from "jsonwebtoken"

const verifyToken = async(req, res, next) =>{
  try {
    const token = req.cookies.Token
    // console.log(token)
    if(!token){
      return res.status(401).json({message:"You don't have Token"})
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next()
    
  } catch (error) {
    return res.status(403).json({message:"token not provided"})
  }
}



export {verifyToken}