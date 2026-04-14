import React from 'react'

function DashboardCard({number, title}) {
  return (
    <div>
        <div className='bg-white shadow rounded text-center py-5 md:py-8'>
            <h3 className='text-2xl text-gray-600 font-bold'>{number}</h3>
            <p className='text-gray-400'>{title}</p>
        </div>

    </div>
  )
}

export default DashboardCard