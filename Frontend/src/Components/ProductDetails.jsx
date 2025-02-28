import React, { useState, useEffect } from 'react';
import { useCountContext } from '../hooks/UseCountContext';

const ProductDetails = ({ product, onClose }) => {
    const { addToCart } = useCountContext(); 

    const [count, setCount] = useState(1);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Save scroll position before opening the modal
        setScrollPosition(window.scrollY);
        document.body.style.overflow = "hidden"; // Prevent background scrolling
        return () => {
            document.body.style.overflow = "auto"; // Restore scrolling when modal closes
        };
    }, []);

    const handleAddToCart = (event) => {
        event.preventDefault();
        addToCart({ ...product, quantity: count });

        // Restore scroll position immediately after closing the modal
        setTimeout(() => {
            window.scrollTo({ top: scrollPosition, behavior: "instant" });
        }, 0);

        onClose();
    };

    const handleClose = () => {
        // Restore scroll position when closing modal
        setTimeout(() => {
            window.scrollTo({ top: scrollPosition, behavior: "instant" });
        }, 0);
        onClose();
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black ">

            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <button onClick={onClose} type='button' className="absolute top-4 right-4 text-xl">✖</button>

                <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4" />
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-700 line-clamp-6">{product.description}</p>
                <h2 className="text-xl font-semibold mt-4">$ {product.price}</h2>

                <div className='flex flex-row justify-between items-center mt-4'>
                    <button onClick={handleClose} type='button' className="px-4 py-2 bg-blue-500 text-white rounded">
                        Close
                    </button>

                   
                    <div className='border p-2 rounded-full flex items-center'>
                        <button className='px-2' type='button' onClick={() => setCount(prev => Math.max(prev - 1, 1))}>-</button>
                        <span className="px-3">{count}</span>
                        <button className='px-2' type='button' onClick={() => setCount(prev => prev + 1)}>+</button>
                    </div>

                 
                    <button type='button' onClick={(event) => handleAddToCart(event, product)}  className="px-4 py-2 bg-green-500 text-white rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
