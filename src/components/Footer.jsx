import React from 'react';
import bookmarkFooterLogo from '../assets/logo-bookmark-white.svg';
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='bg-VeryDarkBlue py-10 space-y-11 lg:space-y-0 lg:flex lg:justify-center lg:py-8'>
      <div className="flex flex-col items-center justify-between gap-9 lg:flex-row lg:justify-normal lg:w-8/12 lg:gap-[64px] lg:pl-11">
        <img src={bookmarkFooterLogo} alt="bookmark logo" fill='hsl(0, 0%, 100%)' />
        <ul className='flex flex-col gap-6 lg:flex-row lg:gap-11'>
          <a href="/" className='uppercase text-GrayishBlue text-center tracking-wider text-md hover:text-SoftRed transition lg:text-sm'>Features</a>
          <a href="/" className='uppercase text-GrayishBlue text-center tracking-wider text-md hover:text-SoftRed transition lg:text-sm'>Pricing</a>
          <a href="/" className='uppercase text-GrayishBlue text-center tracking-wider text-md hover:text-SoftRed transition lg:text-sm'>Contact</a>
        </ul>
      </div>
      <div className="flex justify-center gap-10 lg:w-2/12 lg:pl-16">
        <a href="/"><span className='text-White hover:text-SoftRed transition-colors'><FaFacebookSquare size={26}/></span></a>
        <a href="/"><span className='text-White hover:text-SoftRed transition-colors'><FaTwitter size={26}/></span></a>
      </div>
    </footer>
  )
}
