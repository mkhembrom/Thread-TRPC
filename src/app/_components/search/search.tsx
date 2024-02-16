import React from 'react'
import { Icons } from '../icons'

export default function Search() {
  return (
    <div className='w-full relative'>
        <div className='absolute top-1/2 -translate-y-1/2 left-4'>
            <Icons.search width={15} height={15} fill='currentColor' />
        </div>
        <input type='text' placeholder='Search' className='w-full p-5 border pl-10 rounded-2xl bg-transparent outline-none' />
    </div>
  )
}
