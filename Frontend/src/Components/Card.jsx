import React from 'react'


const Card = ({ product, onClick }) => {
    return (
        <div className="w-[250px] md:w-[287px] h-[397px]  space-y-4 rounded transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400" onClick={onClick}>

            <div className="w-full h-60 flex justify-center items-center overflow-hidden">
                <img src={product.image} alt="" className="w-full h-full object-contain" />
            </div>


            <div className="w-full p-2 flex flex-col space-y-3">
                <p className="font-normal line-clamp-2">{product.title}</p>
                <h2 className="font-semibold text-2xl">$ {product.price}</h2>
            </div>
        </div>
    )
}

export default Card
