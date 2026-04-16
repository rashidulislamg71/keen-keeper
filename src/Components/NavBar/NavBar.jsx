import React from 'react'
import { CiClock2 } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa'
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from 'react-router-dom'
import LinkComponent from './LinkComponents';

function NavBar() {
    return (
        <div>
            <nav className='flex flex-wrap items-center justify-between px-2 py-4 shadow md:px-8 md:py-4'>
                <div className='text-2xl font-bold md:text-3xl'>
                    <Link to={`/`}>
                        <span className='text-[#02af75]'>Keen</span>
                        <span className='text-[#244d3f] '>Keeper</span>
                    </Link>
                </div>
                <div className={`flex justify-center items-center gap-3 md:gap-10`}>
                    <LinkComponent path={"/"}>
                        <FaHome className='text-sm hidden md:block' /> Home
                    </LinkComponent>

                    <LinkComponent path={"/timeline"}>
                        <CiClock2 className='text-sm  hidden md:block' /> Timeline
                    </LinkComponent>

                    <LinkComponent path={"/stats"}>
                        <TfiStatsUp className='text-sm hidden md:block' /> Stats
                    </LinkComponent>


                </div>
            </nav>
        </div>
    )
}

export default NavBar