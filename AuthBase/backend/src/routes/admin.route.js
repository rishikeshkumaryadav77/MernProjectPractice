import {Router} from "express"
import { deleteUsers, getAllUsers } from "../controller/admin.controller.js";
import { verifyToken } from "../middleware/tokenVerify.middleware.js";


const route = Router()

route.get("/getAllUser",verifyToken,getAllUsers)
route.delete("/deleteUser/:id",verifyToken,deleteUsers)



export default route;