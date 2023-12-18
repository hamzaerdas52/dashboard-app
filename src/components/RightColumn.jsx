import React from 'react'
import OverviewItem from './OverviewComponent/OverviewItem'
import Analytics from './Analytics'

const RightColumn = () => {
  return (
    <div className='w-full p-2'>
      <OverviewItem />
      <Analytics />
    </div>
  )
}

export default RightColumn