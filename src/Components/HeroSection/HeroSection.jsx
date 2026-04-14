

import React from 'react'
import { FiPlus } from 'react-icons/fi'

function HeroSection() {
    return (
        <div className='text-center flex flex-col gap-5 items-center justify-center py-6 md:py-8 md:mt-10 px-2 md:px-8 mt-5'>
            <h1 className='text-[#244d3f] font-bold text-3xl md:text-4xl '>Friends to keep close in your life</h1>
            <p className='max-w-lg text-center text-base text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <button className='bg-[#244d3f] hover:bg-[#057146] flex justify-center items-center  text-white py-1 px-3 rounded cursor-pointer ' ><FiPlus className='text' /> Add a Friend</button>

        </div>
    )
}

export default HeroSection