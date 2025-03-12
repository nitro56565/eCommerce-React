import React from 'react'
import Button from './Button'
const HeroSection = () => {
  return (
    <div className='bg-[#FBEBB5] flex-col-reverse flex md:flex-row px-12 pb-3 md:pb-0'>
        <div className='flex justify-center  flex-col'>
            <h1 className='font-semibold text-3xl md:text-7xl text-wrap'>Rocket single seater</h1>
            <div className='mt-10 '>
                <Button text={"Shop Now"}/>
            </div>
        </div>
        <div className=''>
            <img src='/Rocket single seater 1.png'/>
        </div>

    </div>
  )
}

export default HeroSection