

import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <div className='bg-[#244d3f] text-center pt-10 px-4 md:px-16 lg:px-23 md:pt-16 '>

            <div>
                <div className='mb-10 flex flex-col gap-5 justify-center items-center' >
                    <h1 className='text-4xl text-white'>KeenKeeper</h1>
                    <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div>
                        <h3 className='font-bold text-xl mb-2 text-white'>Social Links</h3>
                        <div className='flex justify-center items-center gap-3 text-xl'>

                            <span className='p-2 border rounded-full bg-white text-black cursor-pointer transition-all duration-200 hover:scale-110'>
                                <FaInstagramSquare />
                            </span>

                            <span className='p-2 border rounded-full bg-white text-black cursor-pointer transition-all duration-200 hover:scale-110'>
                                <FaXTwitter />
                            </span>

                            <span className='p-2 border rounded-full bg-white text-black cursor-pointer transition-all duration-200 hover:scale-110'>
                                <FaSquareFacebook />
                            </span>

                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-500'>
                    <div className='py-5 flex justify-between items-center'>

                        <p className='text-gray-400'>{`${new Date().getFullYear()} KeenKeeper. All rights reserved.`}</p>

                        <ul className='flex gap-5 md:gap-8 text-gray-400'>
                            <Link className='hover:text-white'>Privacy Policy</Link>
                            <Link className='hover:text-white'>Terms of Service</Link>
                            <Link className='hover:text-white'>Cookies</Link>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer