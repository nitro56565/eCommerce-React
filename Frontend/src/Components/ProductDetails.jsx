// import React, { useState } from 'react'

// import { useCountContext } from '../context/CountContext';

// const ProductDetails = ({ product, onClose}) => {
//     const { addToCart } = useCountContext(); 

    

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">

//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">

//                 <button onClick={onClose} className="absolute top-4 right-4 text-xl">✖</button>

//                 <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4" />
//                 <h1 className="text-2xl font-bold">{product.title}</h1>
//                 <p className="text-gray-700 line-clamp-6">{product.description}</p>
//                 <h2 className="text-xl font-semibold mt-4">$ {product.price}</h2>

//                 <div className='flex flex-row justify-between '>
//                     <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//                         Close
//                     </button>
//                     <div className='border p-3 m-2 rounded-full '>
//                         <button className='pr-2' onClick={() => setCount(count+1)}>+</button>
//                         {count}
//                         <button className='pl-2' onClick={()=> setCount(count-1)}>-</button>
//                     </div>
//                     <button onClick={() => addToCart(product)} className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
//                         Add to Cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProductDetails


import React, { useState } from 'react';
import { useCountContext } from '../context/CountContext';

const ProductDetails = ({ product, onClose }) => {
    const { addToCart } = useCountContext(); 

    const [count, setCount] = useState(1);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: count })
        onClose(); 
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black ">

            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-xl">✖</button>

                <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4" />
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-700 line-clamp-6">{product.description}</p>
                <h2 className="text-xl font-semibold mt-4">₹ {product.price}</h2>

                <div className='flex flex-row justify-between items-center mt-4'>
                    <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Close
                    </button>

                   
                    <div className='border p-2 rounded-full flex items-center'>
                        <button className='px-2' onClick={() => setCount(prev => Math.max(prev - 1, 1))}>-</button>
                        <span className="px-3">{count}</span>
                        <button className='px-2' onClick={() => setCount(prev => prev + 1)}>+</button>
                    </div>

                 
                    <button onClick={handleAddToCart} className="px-4 py-2 bg-green-500 text-white rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
