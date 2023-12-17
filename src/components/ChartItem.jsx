import React from 'react'
import { AreaChart, Card, Title } from "@tremor/react";
import ChartData from '../utils/ChartData';

const ChartItem = () => {
    return (
        <Card className='mt-4'>
            <Title>Newsletter revenue over time (USD)</Title>
            <AreaChart
                className="h-72 mt-4"
                data={ChartData.chartdata}
                index="date"
                categories={["SemiAnalysis", "The Pragmatic Engineer"]}
                colors={["indigo", "cyan"]}
                valueFormatter={ChartData.valueFormatter}
            />
        </Card>
    )
}

export default ChartItem