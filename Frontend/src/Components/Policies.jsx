import React from 'react'

const Policies = () => {
    return (
        <div className='flex flex-col md:flex-row bg-[#FAF4F4] gap-0 md:gap-7 justify-center items-center md:h-72'>
            <div className=' w-full md:w-1/4 '>
                <h3 className='text-2xl md:text-3xl font-medium '>Free Delivery</h3>
                <p className='text-sm md:text-xl font-normal text-[#9F9F9F]'>For all orders over $50,consectetur adipim scing elit.</p>
            </div>
            <div className='w-full md:w-1/4'>
                <h3 className='text-2xl md:text-3xl font-medium'>90 Days Return</h3>
                <p className='text-sm md:text-xl font-normal text-[#9F9F9F]'>If good have problems, consectetur adipim scing elit. </p>
            </div>
            <div className='w-full md:w-1/4'>
                <h3 className='text-2xl md:text-3xl font-medium'>Secure Payment</h3>
                <p className='text-sm md:text-xl font-normal text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    )
}

export default Policies
