import { DonutChart } from '@tremor/react'
import React from 'react'
import overviewChartData from '../../utils/OverviewChartData'
import valueFormatter from '../../utils/valueFormatter'

const OverviewChartItem = () => {
  return (
    <DonutChart
      data={overviewChartData}
      valueFormatter={valueFormatter}
      showAnimation={true}
      category="value"
      index="name"
      className="mt-10"
    />
  )
}

export default OverviewChartItem