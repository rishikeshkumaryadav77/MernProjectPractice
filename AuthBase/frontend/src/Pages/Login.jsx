import { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register.jsx";
import { post } from "../services/ApiendPoints.js";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";


const Login =()=> {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const request = await post('/api/auth/login', formData)
      const response = request.data
      console.log(request)
      console.log(response)
      if(request.status === 200){
        toast.success(response.message)
        navigate('/')
      }
      

    } catch (error) {
      console.log(error)
    }
    // API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 sm:p-8">
        
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <Link to="/register" className="text-sm text-center text-gray-600 mt-5">
          Don’t have an account?{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Register here
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Login