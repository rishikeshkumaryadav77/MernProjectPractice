import app from "./src/app.js";
import dotenv from "dotenv"
import db from "./src/utils/db.js"
dotenv.config()
await db()


const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log("server stated at", PORT)
})