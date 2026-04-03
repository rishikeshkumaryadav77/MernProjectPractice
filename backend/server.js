require("dotenv").config()
const app = require("./src/app")
const dbConnection = require("./src/Config/db")
dbConnection()








app.listen(process.env.PORT, ()=>{
  console.log("server started")
})