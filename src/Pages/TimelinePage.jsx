

import React from 'react'
import Search from '../Components/TimelinePageComponents/Search'
import Filter from '../Components/TimelinePageComponents/Filter'
import TimelineItems from '../Components/TimelinePageComponents/TimelineItem/TimelineItems'

function TimelinePage() {
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
        <ul>
          <TimelineItems />
        </ul>
      </div>
    </div>
  )
}

export default TimelinePage