import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className='h-screen relative w-[160vw]'>
        <div className=' w-full h-full absolute top-0 right-0 bg-black z-10 opacity-50'></div>
        <img  className=' h-screen absolute' src="https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board1.jpg?alt=media&token=dd6fe7a1-7350-404d-bb91-8f5c11ae9f4d" />
    </div>
  )
}

export default Gallery