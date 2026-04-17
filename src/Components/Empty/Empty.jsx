

import React from 'react'
import { GiEmptyWoodBucketHandle } from 'react-icons/gi'

function Empty() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-100 md:h-70 text-center space-y-3 shadow border border-gray-300 rounded">

              <div className="text-5xl"><GiEmptyWoodBucketHandle /></div>

              <h2 className="text-lg font-semibold text-gray-700">
                No Timeline Data
              </h2>

              <p className="text-sm text-gray-500 max-w-xs">
                You don’t have any activity yet. Start adding calls, texts, or videos to see your timeline here.
              </p>

            </div>
    </div>
  )
}

export default Empty