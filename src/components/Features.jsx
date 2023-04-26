import React from 'react'
import BlueBtn from './BlueBtn'
import { useState } from 'react'
import featuresFirstImg from '../assets/illustration-features-tab-1.svg'
import featuresSecondImg from '../assets/illustration-features-tab-2.svg'
import featuresThirdImg from '../assets/illustration-features-tab-3.svg'

export default function Features() {

  const features = {
    "activeBtn" : "Simple Bookmarking",
    "info": 
    [{
      "name": "Simple Bookmarking",
      "img": featuresFirstImg,
      "title": "Bookmark in one click",
      "description": "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
      "name": "Speedy Searching",
      "img": featuresSecondImg,
      "title": "Intelligent search",
      "description": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
      "name": "Easy Sharing",
      "img": featuresThirdImg,
      "title": "Share your bookmarks",
      "description": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }]
  }

  const [ btn, setBtn ] = useState(features.activeBtn)
  const [bookmark, speedy, easyshare] = features.info

  const unactiveStyle = 'relative font-light text-center text-VeryDarkBlue w-10/12 mx-auto py-4 text-[17px] border-b border-t border-GrayishBlue/30 cursor-pointer hover:after:block after:hidden after:absolute after:bottom-0 after:w-full after:h-[4px] after:left-0 after:bg-SoftRed after:customunderline lg:border-t-0 lg:w-full lg:pb-[26px] lg:after:desktopunderline'

  const activeStyle = unactiveStyle.replace('after:hidden', '')

  return (

    <section className='flex flex-col gap-3 mt-[102px] md:gap-7 md:mt-[88px]'>
      <h2 className='text-center text-2xl mx-auto font-medium md:text-3xl md:tracking-[1px] text-VeryDarkBlue'>Features</h2>
      <p className='text-center text-[15px] w-11/12 mx-auto px-4 leading-[25px] md:text-[18px] text-GrayishBlue md:w-8/12 lg:w-6/12 xl:w-5/12 xl:text-xl xl:px-0 '>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      <div className="flex flex-col mt-[27px] lg:flex-row lg:mt-5 lg:w-6/12 lg:mx-auto">
        {features.info.map((item) => (
          <p className={item.name === btn ? activeStyle : unactiveStyle} key={item.name} onClick={() => {
            setBtn(item.name)
          }}>{item.name}</p>
        ))}
      </div>
      <div className="flex flex-col mt-14 w-full md:flex-row lg:mt-16 xl:mt-10">
        <div className='relative pb-9 pt-1 flex justify-end md:basis-1/2 xl:basis-1/2 xl:pt-0 xl:pb-24'>
          <img src={btn === 'Speedy Searching' ? speedy.img : btn === 'Easy Sharing' ? easyshare.img : bookmark.img} alt="featuresimage" className='w-5/6 mx-auto relative z-10 sm:w-4/6 xl:w-9/12 xl:mx-0 xl:self-end xl:mr-3 2xl:max-w-[657px]'/>
          <div className='h-[203px] w-10/12 bg-SoftBlue rounded-r-full absolute left-0 bottom-0 xl:h-4/5 xl:w-11/12 max-h-[356px]'></div>
        </div>
        <div className='flex flex-col items-center space-y-4 my-10 md:basis-1/2 md:items-start lg:justify-center xl:pl-[110px] xl:space-y-6'>
          <h2 className='text-center text-2xl font-medium text-VeryDarkBlue xl:w-full xl:text-left xl:mx-auto xl:text-3xl xl:tracking-[1px]'>{btn === 'Speedy Searching' ? speedy.title : btn === 'Easy Sharing' ? easyshare.title : bookmark.title}</h2>
          <p className='text-[15px] text-center w-10/12 text-GrayishBlue mx-auto leading-[25px] sm:text-left sm:mx-0 sm:w-9/12 md-text-[18px] xl:text-lg xl:mx-0 xl:text-left xl:w-9/12'>{btn === 'Speedy Searching' ? speedy.description : btn === 'Easy Sharing' ? easyshare.description : bookmark.description}</p>
          <BlueBtn text='More Info' />
        </div>
      </div>
    </section>
  )
}
