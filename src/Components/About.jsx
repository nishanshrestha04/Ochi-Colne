import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#cdea68]  rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='font-[Neue Montreal] text-[4vw] leading-[4.5vw] text-black tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, 
        sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='w-full pt-20 border-t-[1px] mt-10 border-[#a1b562] flex gap-5 '>
          <div className='w-1/2 '>
            <h1 className='text-7xl text-black'>Our approach:</h1>
            <button className='px-10 py-6 flex items-center mt-10 gap-10 bg-zinc-900 rounded-full text-white uppercase'>Read More
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] bg-[#889c42] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About