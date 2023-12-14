import React from 'react'
import { ChartBarIcon, HomeIcon, DocumentMagnifyingGlassIcon, EnvelopeIcon, CreditCardIcon, BellAlertIcon, ArrowUpIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const SideBar = () => {
    return (
        <div className='flex-none w-14 sm:w-36 bg-slate-700 h-screen'>
            <div className='top-5 h-12 items-center left-3 sm:left-5 sm:p-1 flex fixed cursor-pointer hover:bg-gray-500 hover:rounded-lg'>
                <HomeIcon width={36} className=' text-gray-300 ' />
                <p className='hidden sm:flex sm:ml-2 font-bold text-lg text-gray-300'>Home</p>
            </div>
            <div className='fixed top-[100px] left-3 sm:left-6'>
                <ChartBarIcon className='side-bar-icons' />
                <DocumentMagnifyingGlassIcon className='side-bar-icons' />
                <EnvelopeIcon className='side-bar-icons' />
                <CreditCardIcon className='side-bar-icons' />
                <BellAlertIcon className='side-bar-icons' />
            </div>
            <div className='fixed bottom-4 left-3 sm:left-6'>
                <ArrowUpIcon className='side-bar-icons' />
                <ArrowTopRightOnSquareIcon className='side-bar-icons' />
            </div>
        </div>
    )
}

export default SideBar