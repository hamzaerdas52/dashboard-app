import React from 'react'
import CardItems from './CardItems'
import cardData from '../utils/CardData'
import ChartItem from './ChartItem'
import TableItem from './TableItem'
import Cards from './Cards'

const LeftColumn = () => {
    return (
        <div className='w-full flex flex-col p-2 justify-between'>
            <Cards />
            <div className='flex-auto w-full'>
                <ChartItem />
                <TableItem />
            </div>
        </div>
    )
}

export default LeftColumn