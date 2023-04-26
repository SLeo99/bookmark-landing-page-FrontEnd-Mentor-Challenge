import React from 'react'

const browsersInfo = [
  {
    id:'Chrome',
    img:'../src/assets/logo-chrome.svg',
    version:62
  },
  {
    id:'Firefox',
    img:'../src/assets/logo-firefox.svg',
    version:55
  },
  {
    id:'Opera',
    img:'../src/assets/logo-opera.svg',
    version:46
  }
];

export default function Extensions() {

  const extensionCardStyles = 'flex flex-col justify-between w-[282px] max-w-full mx-auto bg-White h-[368px] pt-6 rounded-2xl lg:mx-0 shadow-xl shadow-GrayishBlue'
  const chromeStyles = extensionCardStyles.concat(' lg:-translate-y-11')
  const operaStyles = extensionCardStyles.concat(' lg:translate-y-9')

  return (
    <section className='flex flex-col gap-11 mt-[106px] lg:my-40 lg:space-y-0 lg:gap-20'>
      <div className='space-y-4 xl:space-y-6'>
        <h2 className='text-center text-2xl font-medium text-VeryDarkBlue xl:w-full xl:mx-auto xl:text-3xl xl:tracking-wide'>Download the extension</h2>
        <p className='text-sm text-center text-GrayishBlue w-9/12 tracking-wide leading-6 mx-auto xl:leading-8 xl:text-lg xl:px-2 xl:w-5/12 xl:mx-auto'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>
      <div className='flex flex-col px-2 gap-11 lg:flex-row lg:px-0 lg:justify-center lg:gap-[34px]'>
        {browsersInfo.map((item)=> 
            <div key={item.id} className={item.id === 'Chrome' ? chromeStyles : item.id === 'Opera' ? operaStyles : extensionCardStyles}>
              <div className="flex flex-col items-center gap-8 mt-6">
                <img src={item.img} alt="extension image" className='w-24 h-24'/>
                <div className='flex flex-col space-y-2'>
                  <h3 className='text-center text-xl text-VeryDarkBlue font-medium tracking-wide'>Add to {item.id}</h3>
                  <span className='text-center text-sm text-GrayishBlue font-medium tracking-wide'>Minimum version {item.version}</span>
                </div>
              </div>
              <div className='flex justify-center items-center py-6'>
                <a href="/" className='rounded-md text-center text-sm tracking-wide font-medium py-[14px] inline-block w-10/12 bg-SoftBlue text-White hover:text-SoftBlue hover:bg-White hover:outline hover:outline-2 hover:outline-SoftBlue transition-colors'>Add & Install Extension</a>
              </div>
            </div>
        )}
      </div>
    </section>
  )
}
