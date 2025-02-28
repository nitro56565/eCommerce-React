import React from 'react';
import { useCountContext } from '../hooks/UseCountContext';
import { useNavigate } from 'react-router-dom';

const SidebarCart = ({ onClose }) => {
    const { cartItems } = useCountContext();
    const navigate = useNavigate();
    const handleRedirect = () => {
        // Sending only the required fields (title, price, quantity)
        const checkoutItems = cartItems.map(item => ({
            title: item.title,
            price: (item.price),
            quantity: item.quantity
        }));

        navigate('/checkout', { state: { cart: checkoutItems } });
    };
    return (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-5 overflow-y-auto transition-transform duration-300 ease-in-out">
            <button onClick={onClose} className="absolute top-4 right-4 text-xl">✖</button>
            <h2 className="text-xl font-semibold mb-4">🛒 Cart Items</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="border-b py-3 flex justify-between">
                        <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
                        <div className="flex-1 ml-4">
                            <p className="text-sm">{item.title}</p>
                            <p className="font-semibold">{item.quantity} X $ {item.price}</p>
                        </div>
                    </div>
                ))
            )}

            {cartItems.length > 0 && (
                <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded"
                    onClick={handleRedirect}>

                    Checkout
                </button>
            )}
        </div>
    );
};

export default SidebarCart;
