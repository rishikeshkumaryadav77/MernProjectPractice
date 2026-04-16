import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/CountSlice'

const Home = () => {
  const count = useSelector((mycount) => mycount.countStore.count)
  const dispatch = useDispatch()
  return (
    <>
    <h1>counter</h1>
    <div>{count}</div>
    <button className='m-5 bg-black text-white' onClick={()=>{
      dispatch(increment())
    }}>increment</button>
    <button className='bg-black text-white' onClick={()=>{
      if(count ==0){
        dispatch(count =0)
      }
      dispatch(decrement())
    }}>decrement</button>
    <button className='bg-black m-5 text-white' onClick={()=>{
      dispatch(reset())
    }}>reset</button>
    </>
    
  )
}

export default Home