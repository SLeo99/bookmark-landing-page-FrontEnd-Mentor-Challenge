import React from 'react'
import { useState } from 'react'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import bookmarkLogo from '../assets/logo-bookmark.svg'
import burgerImg from '../assets/icon-hamburger.svg'
import mobileMenuLogo from '../assets/logo-bookmark-burguer-menu.svg'
import closeMenuImg from '../assets/icon-close.svg'

export default function Header() {

  const [menu, setMenu] = useState(false)

  function handleClick () {
    setMenu(!menu)
  }

  return (
    <header className='flex justify-center py-10 mx-8 lg:mx-0 md:justify-between lg:py-[48px]'>
      <nav className='container w-full flex justify-between items-center mx-auto lg:mx-[165px] 2xl:mx-auto' aria-label='desktopnavigation'>
        <img src={bookmarkLogo} alt="bookmarklogo" className={menu ? 'opacity-0' : 'lg:ml-[6px]'}/>
        <ul className='hidden lg:flex items-center gap-[46px] text-[14px]'>
          <li><a href="#" className='uppercase font-medium text-GrayishBlue hover:text-SoftRed transition-colors'>Features</a></li>
          <li><a href="#" className='uppercase tracking-[1px] font-medium text-GrayishBlue hover:text-SoftRed transition-colors'>Pricing</a></li>
          <li><a href="#" className='uppercase tracking-[1px] font-medium text-GrayishBlue hover:text-SoftRed transition-colors'>Contact</a></li>
          <li className='py-[10px]'><a href="#" className='py-[12px] px-8 uppercase tracking-[1px] font-medium bg-SoftRed rounded-md text-White hover:bg-opacity-0 hover:text-SoftRed hover:outline hover:outline-SoftRed transition-colors'>Login</a></li>
        </ul>
        <img src={burgerImg} alt="burguer menu" className={menu ? 'hidden' : 'lg:hidden cursor-pointer'} onClick={handleClick}/>
      </nav>
      <nav className={menu ? "block min-h-screen w-screen bg-VeryDarkBlue/90 fixed z-30 top-0 left-0 transition-all duration-300" : 'min-h-screen w-screen bg-VeryDarkBlue/90 fixed z-30 top-0 left-full transition-all duration-300'} aria-label='mobilenavigation'>
        <div className="flex justify-between items-center py-10 container px-8 sm:px-0 mx-auto w-full sm:w-11/12 lg:mx-[165px] 2xl:mx-auto">
          <img src={mobileMenuLogo} alt="bookmarlogo" />
          <img src={closeMenuImg} alt="closemenu-img" onClick={handleClick} className='cursor-pointer'/>
        </div>
        <div className="flex flex-col mx-8">
          <li className='flex justify-center h-auto uppercase text-xl tracking-widest'><a href="#" className='py-[19px] w-full text-center pr-3 border-y border-GrayishBlue/30 text-White'>Features</a></li>
          <li className='flex justify-center h-auto uppercase text-xl tracking-widest'><a href="#" className='py-[19px] w-full text-center pr-3 border-b border-GrayishBlue/30 text-White'>Pricing</a></li>
          <li className='flex justify-center h-auto uppercase text-xl tracking-widest'><a href="#" className='py-[19px] w-full text-center pr-3 border-b border-GrayishBlue/30 text-White'>Contact</a></li>
          <a href="#" className='uppercase mt-5 w-full text-center py-[8px] text-xl tracking-widest border-2 rounded-md border-GrayishBlue text-White'>Login</a>
        </div>
        <div className="flex justify-center gap-9 mt-[219px]">
          <a href='#' className='text-White'><FaFacebookSquare size={28}/></a>
          <a href='#' className='text-White'><FaTwitter size={28}/></a>
        </div>
      </nav>
    </header>
  )
}
