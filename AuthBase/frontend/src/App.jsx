import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Admin from "./Pages/Admin"
import {Toaster} from "react-hot-toast"
import Protected from "./protectedRoute/Protected"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" 
          element={
          <Home />
                }/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Protected><Admin/></Protected>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
