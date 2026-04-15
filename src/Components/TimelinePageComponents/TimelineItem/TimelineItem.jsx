
import React, { useContext } from 'react'
import { IoVideocam } from 'react-icons/io5';
import { MdOutlinePhonePaused, MdOutlineTextsms } from 'react-icons/md';

function TimelineItem({ timeline, friendName }) {
    const { type, timestamp } = timeline;

    let icon;

    if (type === "call") {
        icon = <MdOutlinePhonePaused className='text-2xl' />;
    }
    else if (type === "text") {
        icon = <MdOutlineTextsms className='text-2xl' />;
    }
    else {
        icon = <IoVideocam className='text-2xl' />;
    }

    const typeFormat = type.charAt(0).toUpperCase() + type.slice(1);

    return (
        <div className="flex items-center gap-2  p-3 rounded shadow mb-4 border border-gray-300">
            {icon}
            <div>
                <p className='font-semibold'>{typeFormat} <span className='text-gray-500'>with {friendName || "Unknown"}</span></p>
                <p className='text-[14px] text-gray-500 '>{timestamp}</p>
            </div>
        </div>
    );
}

export default TimelineItem;