import React from 'react'
import FriendsList from './FriendsList'
import { useLoaderData } from 'react-router-dom'

function Friends() {
    const friends = useLoaderData();

    return (
        <div className='py-10 md:pb-16 px-4 md:px-16'>
            <h1 className='font-bold text-2xl mb-10 text-center'>Your Friends</h1>

            <FriendsList friends={friends} />

        </div>
    )
}

export default Friends