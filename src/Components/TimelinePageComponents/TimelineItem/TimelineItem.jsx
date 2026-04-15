
import React from 'react'
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
        <div className="flex items-center gap-2">
            {icon}
            <div>
                <p>{typeFormat} with {friendName || "Unknown"}</p>
                <p>{timestamp}</p>
            </div>
        </div>
    );
}

export default TimelineItem;