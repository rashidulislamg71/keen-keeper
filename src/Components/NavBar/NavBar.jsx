import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa'
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className='flex items-center justify-between px-4 py-2 shadow-2xl md:px-8 md:py-4'>
                <div className='text-[20px] font-bold md:text-2xl'>
                    <Link to={`/`}>
                        <span className='text-sky-800 md:text-2xl'>Keen</span>
                        <span className='text-[#244d3f] '>Keeper</span>
                    </Link>
                </div>
                <div className={`flex justify-center items-center gap-3 md:gap-10`}>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-1 md:px-2 py-1 rounded 
            ${isActive ? 'text-[#244d3f] font-bold md:font-normal md:bg-[#244d3f] md:text-white' : ''}`
                        }
                    >
                        <FaHome /> Home
                    </NavLink>

                    <NavLink
                        to="/timeline"
                        className={({ isActive }) =>
                            `flex items-center gap-1 md:px-2 py-1 rounded 
            ${isActive ? 'text-[#244d3f] font-bold md:font-normal md:bg-[#244d3f] md:text-white' : ''}`
                        }
                    >
                        <CiClock2 /> Timeline
                    </NavLink>

                    <NavLink
                        to="/stats"
                        className={({ isActive }) =>
                            `flex items-center gap-1 md:px-2 py-1 rounded 
            ${isActive ? 'text-[#244d3f] font-bold md:font-normal md:bg-[#244d3f] md:text-white' : ''}`
                        }
                    >
                        <TfiStatsUp /> Stats
                    </NavLink>

                </div>
            </nav>
        </div>
    )
}

export default NavBar