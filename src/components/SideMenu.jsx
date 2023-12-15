import React from 'react'

const SideMenu = () => {
  return (
    <div className=' bg-slate-100 w-[200px]'>
      <nav className='flex flex-col gap-12 p-3 pt-10 justify-center'>
        <div className=''>
          <h1 className='text-3xl font-bold border-2 border-black rounded-lg text-center'>TEST</h1>
        </div>
        <ul className='flex flex-col gap-4 justify-center'>
          <li>Members</li>
          <li>Plans & Receipts</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  )
}

export default SideMenu