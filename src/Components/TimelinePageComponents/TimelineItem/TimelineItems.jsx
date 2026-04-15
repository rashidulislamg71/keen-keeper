import React, { useContext } from 'react'
import TimelineItem from './TimelineItem'
import { Context } from '../../../ContextAPI/Context'
import { useLoaderData } from 'react-router-dom';
import { findData } from '../../../utils/DataFind';

function TimelineItems() {
    const { timeline, filterTimeline } = useContext(Context);
    const friendsData = useLoaderData();

    const filteredTimeline = timeline.filter(item => {
    if (filterTimeline === "all") return true;
    return item.type === filterTimeline;
});

    return (
        <div className='md:mt-10 mt-5'>
            {
                filteredTimeline?.map(item => {
                    const friend = findData(friendsData, item.friendId);
                    return (
                        <TimelineItem
                            key={item.id}
                            timeline={item}
                            friendName={friend?.name}
                        />
                    );
                })
            }
        </div>
    )
}

export default TimelineItems;