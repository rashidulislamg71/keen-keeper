

import React, { useContext } from 'react'
import Search from '../Components/TimelinePageComponents/Search'
import Filter from '../Components/TimelinePageComponents/Filter'
import TimelineItems from '../Components/TimelinePageComponents/TimelineItem/TimelineItems'
import { Context } from '../ContextAPI/Context'
import Empty from '../Components/Empty/Empty'

function TimelinePage() {
  const { timeline } = useContext(Context);

  const noData = !timeline || timeline.length === 0;
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
          noData ? (
            <Empty />
          ) : (
            <ul className='min-h-70'>
              <TimelineItems />
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default TimelinePage