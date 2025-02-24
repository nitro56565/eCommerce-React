import React from 'react'
import Card from './Card'
import { ProductsData } from '../../public/assets/products'
import Button from './Button'

const SecondSection = () => {
    return (
        <>
            <div className='mt-12'>
                <div className='flex flex-col justify-center items-center space-y-2 pl-2 md:pl-0'>
                    <h1 className='text-3xl font-semibold'>Top Picks For You</h1>
                    <p className='text-[#9F9F9F] font-semibold '>Find a bright ideal to suit your taste with our greate selection of suspension, floor and table lights</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 mx-5 md:mx-12 mt-10 pb-1">
                {ProductsData.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

            <div className='flex justify-center'>
                <Button text={"View More"}/>
            </div>
        </>
    )
}

export default SecondSection