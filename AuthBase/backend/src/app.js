import express from "express"
import cors from "cors"
import route from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import adminRoute from "./routes/admin.route.js"

const app = express()

app.use(express.json())
app.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



// user routes
app.use("/api/auth", route)

// adminroutes
app.use("/admin", adminRoute)

export default app;