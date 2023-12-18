import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/NavBar'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'

const App = () => {
  return (
    <main className='flex'>
      <div className='border-r-2 border-slate-500'>
        <Sidebar />
      </div>
      <div className='flex flex-col flex-1 relative'>
        <Navbar />
        <div className='grid md:grid-cols-3 grid-cols-1 w-full px-2'>
          <div className='col-span-2'><LeftColumn /></div>
          <div className='w-full'><RightColumn /></div>
        </div>
      </div>
    </main>
  )
}

export default App