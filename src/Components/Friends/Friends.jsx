import React, { Suspense, useContext } from 'react'
import FriendsList from './FriendsList'
import { Context } from '../../ContextAPI/Context'

function Friends() {
    const {friendsPromise} = useContext(Context)

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