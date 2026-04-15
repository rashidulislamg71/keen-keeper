
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-1 h-[100vh] '>
      <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold bg-linear-to-r
       to-[#18c28a] from-[#067852] text-transparent bg-clip-text'>404</h1>
      <h3 className='text-2xl font-bold text-[#10bb9c] '>Page Not Found</h3>
<p className='text-center max-w-100'>Oops! The page you're looking for doesn't exist. Please return to the home page.</p>
      <button className='bg-[#08603ed4] mt-3 rounded cursor-pointer py-1 px-5 text-white '><Link to={"/"}>Go Home</Link></button>
    </div>
  )
}

export default NotFound