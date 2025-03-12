import React from 'react'

const ThirdSection = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#FFF9E5] mt-8'>
        <div className='w-[300px] h-[300px] md:w-[800px] md:h-[639px] '>
            <img src='/AsgaardSofa.png' alt="" className=''/>
        </div>
        <div className='flex flex-col justify-center items-center md:ml-12'>
            <h3 className='font-semibold text-xl md:text-2xl'>New Arrivals</h3>
            <h1 className='font-bold text-3xl md:text-5xl'>Asgaard sofa</h1>
            <button className='font-medium text-sm border border-black py-3 px-4 md:px-8 mt-4 md:mt-8'>Order Now</button>
        </div>
    </div>
  )
}

export default ThirdSection
