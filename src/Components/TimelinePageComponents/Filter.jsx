
import React, { useContext } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Context } from '../../ContextAPI/Context'

function Filter() {
    const { filterTimeline, handleTimelineFilter } = useContext(Context);


    const handleSelect = (filterType) => {
        handleTimelineFilter(filterType);
        const elem = document.activeElement;
        if (elem) {
            elem.blur();
        }
    };

    return (
        <div className=''>
            <div className="dropdown dropdown-start">
                <div
                    tabIndex={0}
                    role="button"
                    className="w-59 flex justify-between items-center m-1 border border-gray-300 rounded px-2 py-2 bg-white cursor-pointer"
                >
                    <span className="capitalize">Filter timeline: {filterTimeline}</span>
                    <IoMdArrowDropdown />
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-gray-200"
                >
                    <li><a onClick={() => handleSelect("all")}>All</a></li>
                    <li><a onClick={() => handleSelect("call")}>Call</a></li>
                    <li><a onClick={() => handleSelect("text")}>Text</a></li>
                    <li><a onClick={() => handleSelect("video")}>Video</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Filter;