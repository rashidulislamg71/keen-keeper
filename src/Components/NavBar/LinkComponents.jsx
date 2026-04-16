import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkComponent({ path, children }) {
    return (
        <div>
            <NavLink to={path} className={({ isActive }) =>
                `flex items-center md:gap-1 md:px-2 py-1 rounded 
            ${isActive ? 'text-[#244d3f] font-bold md:font-normal md:bg-[#244d3f] md:text-white' : ''}`
            } > {children} </NavLink>
        </div>
    )
}

export default LinkComponent