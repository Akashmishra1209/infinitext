import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Searchsection({ onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-2xl font-bold'>Browse All Templates</h2>
      <p className='text-sm'>What Would You Like To Create Today ?</p>
      <div className='w-full flex justify-center items-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white mt-3 w-[40%]'>
          <SearchIcon className='text-primary h-4 w-4' />
          <input type="text" placeholder='Search' className='bg-transparent w-full outline-none text-black text-sm' onChange={(event) => onSearchInput(event.target.value)} />
        </div>
      </div>
    </div>
  )
}