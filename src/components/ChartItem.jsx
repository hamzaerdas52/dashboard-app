import React from 'react'
import { AreaChart, Card, Title } from "@tremor/react";
import ChartData from '../utils/ChartData';
import valueFormatter from '../utils/valueFormatter';

const ChartItem = () => {
    return (
        <Card className='mt-4'>
            <Title>Sales Chart (USD)</Title>
            <AreaChart
                className="h-72 mt-4"
                data={ChartData.chartdata}
                index="date"
                categories={["Book", "Computer"]}
                colors={["indigo", "cyan"]}
                valueFormatter={valueFormatter}
            />
        </Card>
    )
}

export default ChartItem