import React from 'react'
import CardItems from './CardItems'
import cardData from '../utils/CardData'
import ChartItem from './ChartItem'

const LeftColumn = () => {
    return (
        <div className='w-full flex flex-col p-2 justify-between'>
            <div className='w-full flex flex-col gap-2 lg:grid lg:grid-cols-3 lg:grid-rows-2'>
                {cardData.map((item, index) => (
                    <CardItems key={index} item={item} />
                ))}
            </div>
            <div className='flex-auto w-full'>
                <ChartItem />
            </div>
        </div>
    )
}

export default LeftColumn