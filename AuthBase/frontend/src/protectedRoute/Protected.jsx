import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");

  // ❌ no token
  if (!token) {
    return <Navigate to="/login" />;
  }

  let user;

  try {
    user = jwtDecode(token); // ✅ decode token
    // ❌ not admin
  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }
  } catch (error) {
    return <Navigate to="/login" />;
  }

  

  // ✅ allowed
  return children;
};

export default Protected;