import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='mb-2 p-4 bg-gradient-to-r from-stone-200 to-indigo-300 rounded-md flex justify-between items-center'>
      <div className='text-black text-xl'>
        <Link  href="/">
          <h1 className='font-extrabold'>Task Manager</h1>
        </Link>
      </div>
      <div className='h-fit'>
        <Link href={"/components/MainForm"}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>

        </Link>
      </div>
    </div>
  )
}

export default Navbar