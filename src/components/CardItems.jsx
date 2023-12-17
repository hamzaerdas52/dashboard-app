import { BadgeDelta, Card, Flex, Grid, Metric, ProgressBar, Text } from "@tremor/react";
import React from 'react'

const CardItems = ({ item }) => {
    return (
        <Card decoration="right" decorationColor="blue">
            <Flex alignItems="start">
                <div className="truncate">
                    <Text className="truncate">{item.title}</Text>
                    <Metric>{item.metric}</Metric>
                </div>
                <BadgeDelta deltaType={item.deltaType}>
                    {item.delta}
                </BadgeDelta>
            </Flex>
            <Flex className="mt-4">
                <Text className="truncate">{`${item.progress}% (${item.metric})`}</Text>
                <Text className="truncate">{item.target}</Text>
            </Flex>
            <ProgressBar value={item.progress} className="mt-2" />
        </Card>
    )
}

export default CardItems