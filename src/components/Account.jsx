import React from 'react'
import { UserAuth } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

export const Account = () => {
  const {logOut}=UserAuth()
  const Navigate = useNavigate()
  const handleLogOut=async()=>{
    try {
      await logOut()
      Navigate('/')
      console.log("You are logged out")
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
        <h1 className='font-bold text-2xl py-4'>Account</h1>
        <h2 className='text-2xl font-semibold flex items-center justify-center'>Hello World!</h2>
        <button onClick={handleLogOut} className='border-blue-500 text-white bg-blue-600 text-lg rounded-3xl hover:shadow-xl  w-48 p-4 my-2 hover active:scale-95 active:bg-blue-400 transition transform duration-100 ease-out'>Logout</button>
    </div>
  )
}
