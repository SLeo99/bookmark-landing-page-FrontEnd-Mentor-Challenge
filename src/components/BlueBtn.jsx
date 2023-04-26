import React from 'react'

export default function BlueBtn({text = 'XDDDD'}) {
  return (
    <a href="/" className='hidden py-3 px-3 rounded-md bg-SoftBlue text-White hover:text-SoftBlue hover:bg-White hover:outline hover:outline-2 hover:outline-SoftBlue md:block xl:px-6 xl:ml-0 transition-colors'>{text}</a>
  )
}
