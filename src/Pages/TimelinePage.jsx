

import React, { useContext } from 'react'
import Search from '../Components/TimelinePageComponents/Search'
import Filter from '../Components/TimelinePageComponents/Filter'
import TimelineItems from '../Components/TimelinePageComponents/TimelineItem/TimelineItems'
import { Context } from '../ContextAPI/Context'
import { ImFileEmpty } from 'react-icons/im'
import { GiEmptyWoodBucketHandle } from 'react-icons/gi'

function TimelinePage() {

  const { timeline } = useContext(Context);



  return (
    <div className='px-4 py-10 md:px-20 md:py-16 md:max-w-5xl m-auto'>
      <h1 className='text-2xl font-bold '>Timeline </h1>
      <div className='flex flex-wrap justify-center md:justify-between items-center gap-4 my-4'>
        {/* filter  */}
        <div>
          <Filter />
        </div>
        {/* search  */}
        <div>
          <Search />
        </div>
      </div>

      {/* timeline items  */}
      <div>
        {
          timeline.length > 0 ?
            <ul>
              <TimelineItems />
            </ul>
            :
            <div className="flex flex-col items-center justify-center h-60 text-center space-y-3 shadow border border-gray-300 rounded">

              <div className="text-5xl"><GiEmptyWoodBucketHandle /></div>

              <h2 className="text-lg font-semibold text-gray-700">
                No Timeline Data
              </h2>

              <p className="text-sm text-gray-500 max-w-xs">
                You don’t have any activity yet. Start adding calls, texts, or videos to see your timeline here.
              </p>

            </div>
        }
      </div>
    </div>
  )
}

export default TimelinePage