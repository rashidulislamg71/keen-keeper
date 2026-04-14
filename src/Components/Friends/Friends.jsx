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
        <div>
            <Suspense fallback={<div>Loading friends...</div>}>
                <FriendsList friendsPromise={friendsPromise} />
            </Suspense>
        </div>
    )
}

export default Friends