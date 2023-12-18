import React from 'react'
import { BarList, Bold, Card, Flex, Text, Title } from "@tremor/react";
import analyticsData from '../utils/AnalyticsData'

const Analytics = () => {
    return (
        <Card className="mt-4">
            <Title>Analytics</Title>
            <Flex className="mt-4">
                <Text>
                    <Bold>Source</Bold>
                </Text>
                <Text>
                    <Bold>Visits</Bold>
                </Text>
            </Flex>
            <BarList data={analyticsData} className="mt-2" />
        </Card>
    )
}

export default Analytics