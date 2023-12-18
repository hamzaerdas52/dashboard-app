import { Bold, Button, Card, Divider, Flex, Metric, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react'
import React from 'react'
import icons from '../../assets/icons'
import OverviewChartItem from './OverviewChartItem'
import OverviewListItem from './OverviewListItem'

const OverviewItem = () => {
    return (
        <Card className='max-w-full mx-auto'>
            <Title>Overview</Title>
            <Flex className='mt-2'>
                <TabGroup>
                    <TabList variant="line">
                        <Tab icon={icons.chartPie}>Chart</Tab>
                        <Tab icon={icons.viewList}>List</Tab>
                    </TabList>
                    <Text className="mt-6">Portfolio Value</Text>
                    <Metric>$ 25,465</Metric>
                    <Divider>Companys</Divider>
                    <Text className="mt-6">
                        <Bold>Asset Allocation</Bold>
                    </Text>
                    <Text>1 Asset class - 5 Holdings</Text>
                    <TabPanels>
                        <TabPanel>
                            <OverviewChartItem />
                        </TabPanel>
                        <TabPanel>
                            <OverviewListItem />
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </Flex>
            <Flex className='mt-6 pt-4 border-t'>
                <Button size='md' variant='light' icon={icons.arrowRight} iconPosition='right'>View more</Button>
            </Flex>
        </Card>
    )
}

export default OverviewItem