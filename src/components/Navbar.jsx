import { TextInput } from '@tremor/react'
import React from 'react'
import icons from '../assets/icons'

const Navbar = () => {
  return (
    <div id='top' className='relative w-full sm:flex justify-between items-center p-2'>
      <h1 className='font-bold text-2xl text-slate-200'>Dashboard</h1>
      <div className='py-2 sm:min-w-[300px]'>
        <TextInput icon={icons.search} placeholder='Search...' className='' />
      </div>
      
    </div>
  )
}

export default Navbar