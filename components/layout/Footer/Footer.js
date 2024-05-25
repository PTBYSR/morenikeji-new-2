import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' px-9 pt-32 flex flex-col pb-10 justify-between'>

<div className=''>
    <div className=' text-6xl'>
        Let's work
    </div>
    <div className='text-base mt-3'>
        <span className='font-semibold text-lg'>Click here</span>, let's schedule a call
    </div>
</div>
<div className='flex justify-between border-t mt-6 pt-6 border-black border-opacity-20'>
    <div>
        builtbyPASE
    </div>
    <div className='flex flex-col items-end gap-2'>
        <div className='flex gap-5'>
            <div className='text-4xl '><Link href="">Instagram</Link></div>
            <div className='text-4xl'><Link href="">Twitter</Link></div>
        </div>
        <div className='text-xl'>
            08066499537
        </div>
    </div>
</div>
    </footer>
  )
}

export default Footer