import React from 'react'

const Card = ({ product }) => {
    return (
        <div>
            <div className='w-[287px] h-[397px] space-y-4'>
                <div className='flex justify-center'>
                    <img src={product.image} alt="" />
                </div>
                <div className='w-[199px] p-2 flex flex-col space-y-3   '>
                    <p className='font-normal'>{product.name}</p>
                    <h2 className='font-semibold text-2xl'>{product.price}</h2>
                </div>
            </div>


        </div>
    )
}

export default Card