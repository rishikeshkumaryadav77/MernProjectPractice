import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Admin from "./Pages/Admin"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
