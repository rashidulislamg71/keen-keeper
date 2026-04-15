import React from 'react'
import FriendsList from './FriendsList'
import { useLoaderData } from 'react-router-dom'
import { HashLoader } from 'react-spinners';

function Friends() {
    const friends = useLoaderData();
    return (
        <div className='py-10 md:pb-16 px-4 md:px-16'>
            <h1 className='font-bold text-2xl mb-5 '>Your Friends</h1>
            <div>
                <FriendsList friends={friends} />
            </div>
        </div>

    )
}

export default Friends