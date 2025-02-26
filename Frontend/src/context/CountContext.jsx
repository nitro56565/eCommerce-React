import { createContext, useContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: product.quantity }];
            }
        });
    };

    return (
        <CountContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CountContext.Provider>
    );
};

export const useCountContext = () => useContext(CountContext);
