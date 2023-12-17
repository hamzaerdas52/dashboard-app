import React from 'react'
import icons from '../assets/icons'

const Sidebar = () => {
    return (
        <div className='flex-none w-14 sm:w-32'>
            <div className='top-3 h-12 items-center left-3 sm:left-4 sm:p-1 flex fixed cursor-pointer hover:bg-gray-500 hover:rounded-lg'>
                <icons.home width={36} className=' text-gray-300 ' />
                <p className='hidden sm:flex sm:ml-2 font-bold text-lg text-gray-300'>Home</p>
            </div>
            <div className='fixed top-[100px] left-3 sm:left-4'>
                <icons.chartBar className='side-bar-icons' />
                <icons.document className='side-bar-icons' />
                <icons.envelope className='side-bar-icons' />
                <icons.creditCard className='side-bar-icons' />
                <icons.bellAlert className='side-bar-icons' />
            </div>
            <div className='fixed bottom-4 left-3 sm:left-4'>
                <a href="#top">
                    <icons.arrowUp className='side-bar-icons' />
                </a>
                <icons.arrowTop className='side-bar-icons' />
            </div>
        </div>
    )
}

export default Sidebar