import React, { Suspense } from 'react'
import FriendsList from './FriendsList'

const friendsData = async () => {
    const response = await fetch('/friends.json')
    const data = await response.json()
    return data
}

function Friends() {

    const friendsPromise = friendsData();

    return (
        <div className='py-10 md:pb-16 px-4 md:px-16'>
            <h1 className='font-bold text-2xl mb-10 text-center'>Your Friends</h1>
            <Suspense fallback={<div>Loading friends...</div>}>
                <FriendsList friendsPromise={friendsPromise} />
            </Suspense>
        </div>
    )
}

export default Friends