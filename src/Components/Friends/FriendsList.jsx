import React, { use } from 'react'

function FriendsList({ friendsPromise }) {

    const friends = use(friendsPromise);
    console.log(friends);

  return (
    <div>FriendsList</div>
  )
}

export default FriendsList