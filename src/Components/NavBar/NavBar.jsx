import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa'
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from 'react-router-dom'
import LinkComponent from './LinkComponents';

function NavBar() {
    return (
        <div>
            <nav className='flex items-center justify-between px-4 py-2 shadow-2xl md:px-8 md:py-4'>
                <div className='text-[20px] font-bold md:text-2xl'>
                    <Link to={`/`}>
                        <span className='text-[#02af75]'>Keen</span>
                        <span className='text-[#244d3f] '>Keeper</span>
                    </Link>
                </div>
                <div className={`flex justify-center items-center gap-3 md:gap-10`}>
                    <LinkComponent path={"/"}>
                        <FaHome className='text-sm' /> Home
                    </LinkComponent>

                    <LinkComponent path={"/timeline"}>
                        <CiClock2 className='text-sm ' /> Timeline
                    </LinkComponent>

                    <LinkComponent path={"/stats"}>
                        <TfiStatsUp className='text-sm' /> Stats
                    </LinkComponent>


                </div>
            </nav>
        </div>
    )
}

export default NavBar