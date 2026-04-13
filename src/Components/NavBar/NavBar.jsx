import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa'
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav>
                <div children="text-3xl md:text-3xl font-bold">
                    <span className='text-sky-700'>Keen</span>
                    <span className='text-sky-700'>Keeper</span>
                </div>
                <div>
                    <NavLink><span><FaHome /></span>Home</NavLink>
                    <NavLink><span><CiClock2 /></span>Timeline</NavLink>
                    <NavLink><span><TfiStatsUp /></span>Stats</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar