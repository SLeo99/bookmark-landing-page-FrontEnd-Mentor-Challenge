import React from 'react'

export default function Hero() {
  return (
    <section className='relative mt-9 flex flex-col items-center md:flex-row-reverse lg:mt-14'>
      <div className='relative w-full flex justify-center px-3 pb-2 md:overflow-hidden md:basis-1/2 xl:justify-start xl:pl-3 xl:pb-7'>
        <img src="../src/assets/illustration-hero.svg" alt="hero-image" className='relative z-10 xl:w-auto'/>
        <div className='absolute min-h-[202px] w-4/5 bottom-0 right-0 md:w-3/5 bg-SoftBlue rounded-l-full xl:hidden'></div>
      </div>
      <div className='my-12 flex flex-col gap-2 text-center sm:max-w-lg xl:text-left md:basis-1/2 xl:max-w-full xl:items-start lg:space-y-7 xl:mt-0'>
        <h2 className='text-[30px] text-center text-VeryDarkBlue font-medium lg:text-5xl xl:text-5xl xl:text-left xl:max-w-[556px] xl:self-end'>A Simple Bookmark Manager</h2>
        <p className='mx-[36px] text-[15px] mb-6 leading-[25px] text-GrayishBlue text-center xl:text-left xl:mx-0 xl:mb-0 xl:text-xl xl:max-w-[556px] xl:self-end'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className='flex justify-center mx-[10px] space-x-4 xl:mx-0 xl:w-[556px] xl:self-end xl:justify-start'>
          <a href="/" className='py-3 px-4 text-[15px] rounded-md bg-SoftBlue text-White hover:text-SoftBlue hover:bg-White hover:outline hover:outline-2 hover:outline-SoftBlue xl:px-6 xl:ml-0 transition-colors'>Get it on Chrome</a>
          <a href="/" className='py-3 px-4 text-[15px] rounded-md text-VeryDarkBlue hover:outline hover:outline-2 hover:outline-VeryDarkBlue xl:px-6 transition-colors'>Get it on Firefox</a>
        </div>
      </div>
      <div className='hidden absolute bottom-0 right-0 xl:block xl:min-h-[350px] xl:w-2/5 bg-SoftBlue rounded-l-full'></div>
    </section>
  )
}
