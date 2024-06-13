import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-20 manrope px-3 bg-black  md:px-9 pt-32 flex flex-col  pb-5  md:pb-10 justify-between'>

<div className=''>
    <div className='text-gray-300 text-5xl  md:text-6xl'>
        Let's work 📞
    </div>
    <div className='text-base mt-3 text-gray-300'>
        <span className='text-gray-300 font-semibold text-lg'>Click here</span>, let's schedule a discovery call
    </div>
</div>
<div className='flex flex-col-reverse  md:flex-row  gap-9  justify-between border-t mt-6 pt-6 border-white border-opacity-20'>
    <div className='text-opacity-50 text-gray-300 font-semibold'  >
        <Link href="" >builtbyPASE</Link>
    </div>
    <div className='flex flex-col md:items-end gap-2 '>
        <div className='flex gap-5'>
            <div className=' text-gray-300  text-xl  md:text-4xl '><Link href="">Instagram</Link></div>
            <div className=' text-gray-300  text-xl  md:text-4xl'><Link href="">Twitter</Link></div>
        </div>
        <div className=' text-gray-300 md:text-xl'>
            08066499537
        </div>
    </div>
</div>
    </footer>
  )
}

export default Footer