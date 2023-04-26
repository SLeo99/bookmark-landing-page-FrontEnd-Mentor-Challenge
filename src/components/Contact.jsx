import React, { useState } from 'react'

export default function Contact() {

  
  const [email, setEmail] = useState(null)
  
  const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g
  
  const handleValidation = (e) => {
    if (emailRegEx.test(email)) {
      e.target.classList.add('text-LimeGreen')
      e.target.classList.remove('text-SoftRed')
      e.target.classList.add('focus:border-LimeGreen')
      e.target.classList.remove('focus:border-SoftRed')
    } else {
      e.target.classList.add('text-SoftRed')
      e.target.classList.remove('text-LimeGreen')
      e.target.classList.remove('focus:border-LimeGreen')
      e.target.classList.add('focus:border-SoftRed')
    }
  }

  return (
    <section className='flex flex-col items-center gap-[30px] pt-[70px] pb-[60px] bg-SoftBlue lg:gap-10 lg:pb-[74px]'>
      <div className="flex flex-col items-center gap-3 lg:gap-9">
        <span className='text-sm tracking-[0.25em] text-White/50 font-medium uppercase lg:tracking-[.325em]'>35,000+ already joined</span>
        <h2 className='text-2xl text-center tracking-[0.002em] leading-7 font-medium text-White lg:text-[31px] lg:leading-9 lg:w-9/12'>Stay up-to-date with what we’re doing</h2>
      </div>
      <form className="flex flex-col w-10/12 gap-4 lg:flex-row lg:justify-center">
        <input type="email" placeholder='youremail@gmail.com' className='border-2 border-SoftRed/0 rounded-md focus:border-2 focus:border-SoftRed  focus:outline-none py-[10px] px-[18px] lg:w-3/12' onChange={(e) => {
          setEmail(e.target.value)
          handleValidation(e)
        }}/>
        <button type="submit" className='py-3 tracking-tight rounded-md bg-SoftRed text-White lg:px-6'>Contact Us</button>
      </form>
    </section>
  )
}
