import React, { useContext } from 'react'
import Card from './Card'
import { MdOutlineTextsms } from 'react-icons/md'
import { IoVideocam } from 'react-icons/io5'
import { MdOutlinePhonePaused } from "react-icons/md";
import { Context } from '../../../ContextAPI/Context';

function QuickCheck({ friendId }) {

  const { handleTimelineUpdate } = useContext(Context);

  return (
    <div className='p-5 rounded shadow bg-white mt-5'>
      <h3 className='font-bold text-gray-600'>Quick Check-In</h3>
      <div className='text-center grid grid-cols-1 md:grid-cols-3 gap-4 mt-2'>
        <span onClick={() => handleTimelineUpdate(friendId, 'call')}>
          <Card >
            <MdOutlinePhonePaused className='text-2xl m-auto' /> <span>Call</span>
          </Card>
        </span>
        <span onClick={() => handleTimelineUpdate(friendId, 'text')}>
          <Card >
            <MdOutlineTextsms className='text-2xl m-auto' /> <span>Text</span>
          </Card>
        </span>
        <span onClick={() => handleTimelineUpdate(friendId, 'video')}>
          <Card >
            <IoVideocam className='text-2xl m-auto' /> <span>Video</span>
          </Card>
        </span>
      </div>
    </div>
  )
}

export default QuickCheck