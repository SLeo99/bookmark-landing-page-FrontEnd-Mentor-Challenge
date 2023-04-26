import React from 'react'
import faq from '../faqjson.js'
import BlueBtn from './BlueBtn.jsx'


export default function Faq() {

  return (
    <section className='flex flex-col mt-[132px] mb-[119px] lg:mt-48 lg:mb-[139px] gap-12 lg:gap-[70px]'>
      <div className='flex flex-col gap-4 self-stretch'>
        <h2 className='w-9/12 text-center text-2xl mx-auto font-medium md:text-3xl md:tracking-[1px] text-VeryDarkBlue'>Frequently Asked Questions</h2> 
        <p className='text-center text-[15px] w-11/12 mx-auto px-4 leading-[25px] md:text-[18px] text-GrayishBlue md:w-8/12 lg:w-6/12 xl:w-5/12 xl:text-xl xl:px-0 '>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>
      <div className='relative max-w-[534px] w-10/12 lg:max-w-[534px] mx-auto border-t border-GrayishBlue'>
        {
          faq.map((item) => (
            <div className='relative' key={item.id}>
              <div className='flex justify-between items-center cursor-pointer py-[24px] after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 after:bg-GrayishBlue' key={item.id} 
                onClick={(e)  => {
                  e.target.nextElementSibling.classList.toggle('hidden')
                  e.target.nextElementSibling.classList.toggle('block')
                  e.target.lastChild.classList.toggle('-rotate-[405deg]')
                  e.target.lastChild.classList.toggle('border-SoftBlue')
                  e.target.lastChild.classList.toggle('border-SoftRed')
                }}>
                  <span className='tracking-tight pointer-events-none text-VeryDarkBlue lg:tracking-wide leading-none'>{item.question}</span>
                  <div className='w-3 h-3 border-t-4 border-r-4 border-SoftBlue -rotate-[225deg] -translate-x-1 pointer-events-none transition duration-200'></div>
                  {/* {!dropdown ? <BsChevronDown size={20} fill='' className='pointer-events-none'/> : <BsChevronUp color='hsl(0, 94%, 66%)' size={20}/>} */}
              </div>
              <div className='hidden'>
                <p className='text-GrayishBlue text-[15px] pr-2 py-[13px] leading-[2.005em]'>{item.answer}</p>
              </div>
            </div>
          ))
        }
      </div>
      <a href="/" className='self-center py-3 px-6 rounded-md bg-SoftBlue text-White hover:text-SoftBlue hover:bg-White hover:outline hover:outline-2 hover:outline-SoftBlue md:block xl:px-6 xl:ml-0 transition-colors'>More Info</a>
    </section>
  )
}