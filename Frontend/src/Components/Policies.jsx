import React from 'react'

const Policies = () => {
    return (
        <div className='flex flex-row bg-[#FAF4F4] gap-7 justify-center items-center h-72 '>
            <div className='w-1/4'>
                <h3 className='text-3xl font-medium'>Free Delivery</h3>
                <p className='text-xl font-normal text-[#9F9F9F]'>For all orders over $50,consectetur adipim scing elit.</p>
            </div>
            <div className='w-1/4'>
                <h3 className='text-3xl font-medium'>90 Days Return</h3>
                <p className='text-xl font-normal text-[#9F9F9F]'>If good have problems, consectetur adipim scing elit. </p>
            </div>
            <div className='w-1/4'>
                <h3 className='text-3xl font-medium'>Secure Payment</h3>
                <p className='text-xl font-normal text-[#9F9F9F]'>100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    )
}

export default Policies
