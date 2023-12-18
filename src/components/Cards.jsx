import React from 'react'
import CardItems from './CardItems'
import cardData from '../utils/CardData'

const Cards = () => {
    return (
        <div className='w-full flex flex-col gap-2 lg:grid lg:grid-cols-3'>
            {cardData.map((item, index) => (
                <CardItems key={index} item={item} />
            ))}
        </div>
    )
}

export default Cards