import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/admin">Admin Dashboard</Link>
    
    </>
  )
}

export default Home