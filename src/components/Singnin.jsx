import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth, UserContext } from '../context/Authcontext'

export const Singnin = () => {
    const {SignIn} =UserAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setError('')
        try {
            await SignIn(email,password)
            navigate('/account')
        } catch (e) {
            setError('Invaild email or Password')   
            setTimeout(() => setError(""), 3000);         
            console.log(e.message)
        }
    }
  return (
    <div className='max-w-[700px] mx-auto my-16 py-4'>
        <div>
            <h1 className='text-2xl font-bold py-2'>SignIn to your Account</h1>
            <p className='py-2'>
                Create a Account? <Link className='underline' to='/Signup'>SignUp</Link>
            </p>
        </div>
        {error && (
        <div className='bg-red-200 text-red-800 p-2 rounded mb-4'>
          {error}
        </div>
      )}
    
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Email Adress</label>
            <input onChange={(e)=>setEmail(e.target.value)} className='border p-3 rounded-xl' type="email" />
        </div>
        <div className='flex flex-col py-2'>
            <label className='py-2 font-medium'>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} className='border p-3 rounded-xl' type="password" />
        </div>
        <button className='border-blue-500 text-white bg-blue-600 text-lg rounded-3xl hover:shadow-xl  w-full p-4 my-2 hover active:scale-95 active:bg-blue-400 transition transform duration-100 ease-out'>Sign In</button>
    </form>
    </div>
  )
}
