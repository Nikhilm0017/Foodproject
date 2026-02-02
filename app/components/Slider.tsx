import React from 'react'
import Image from 'next/image'

const Slider = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      {/*TEXT CONTAINER*/}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1>
          TEST
        </h1>
        <button className=''>Order Now</button>
      </div>
      {/*IMAGE CONTAINER*/}
      <div className="w-full h-1/2 relative ">
        <Image src="/slide1.png" alt="" fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider