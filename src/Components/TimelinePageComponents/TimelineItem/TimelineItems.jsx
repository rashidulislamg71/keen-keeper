import React, { useContext } from 'react'
import TimelineItem from './TimelineItem'
import { Context } from '../../../ContextAPI/Context'
import { useLoaderData } from 'react-router-dom';
import { findData } from '../../../utils/DataFind';

function TimelineItems() {
    const { timeline } = useContext(Context);
    const friendsData = useLoaderData();

    return (
        <div className='md:mt-10 mt-5'>
            {
                timeline.map(item => {
                    const friend = findData(friendsData, item.friendId);
                    console.log(friend)
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