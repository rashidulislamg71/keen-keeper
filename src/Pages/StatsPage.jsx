import React from 'react'
import PieChartWithPaddingAngle from '../Components/PieChart/PieChart'

function StatsPage() {
  return (
    <div className="px-2 py-10 md:py16 md:px-20 mb-15">
      <div>
        <h1 className='mb-3 font-bold text-2xl md:text-3xl text-gray-700'>Friendship Analytics</h1>
        <div className='p-5 pb-8 rounded shadow h-auto w-full'>
          <p className='text-base text-gray-500'>By Interaction Type</p>
          <div>
            <PieChartWithPaddingAngle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsPage