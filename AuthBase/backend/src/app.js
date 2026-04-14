import express from "express"
import cors from "cors"
import route from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



// routes
app.use("/api/auth", route)

export default app;