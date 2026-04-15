import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

function Filter() {
    return (
        <div className=''>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="w-59 flex justify-between items-center m-1 border border-gray-300 rounded px-2 py-2 bg-white ">
                    <span>Filter timeline</span>
                    <IoMdArrowDropdown />
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-59 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Filter