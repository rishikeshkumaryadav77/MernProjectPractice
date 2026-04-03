const mongoose = require("mongoose")
async function dbConnection(){
  await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DataBase Connected")
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports = dbConnection