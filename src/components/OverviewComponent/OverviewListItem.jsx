import { BadgeDelta, Bold, Card, Flex, List, ListItem, Text } from '@tremor/react'
import React from 'react'
import chartData from '../../utils/OverviewChartData'

const OverviewListItem = () => {
  return (
    <Card>
      <Flex justifyContent="between">
        <Text className="truncate">
          <Bold>Stocks</Bold>
        </Text>
        <Text className='truncate'>Since transaction</Text>
      </Flex>
      <List className="mt-4">
        {chartData.map((data) => (
          <ListItem key={data.name}>
            <Text>{data.name}</Text>
            <Flex justifyContent="end">
              <Text className='truncate pe-1'>
                $ {Intl.NumberFormat("us").format(data.value).toString()}
              </Text>
              <BadgeDelta deltaType={data.deltaType}>
                {data.performance}
              </BadgeDelta>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default OverviewListItem