import React, { useEffect } from 'react'
import { get } from '../services/ApiendPoints'

const Admin = () => {
  useEffect(()=>{
    const Getusers = async () =>{
      try {
      const request = await get('/admin/getAllUser')
      const response = request.data
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    }
    Getusers()
    
  }, [])

  return (
    <>
    <h1>admin</h1>
    </>
  )
}

export default Admin