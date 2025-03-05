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

    const removeFromCart = (idArray) => {
        setCartItems((prevItems) => prevItems.filter((item) => !idArray.includes(item.id)));
    };
    

    return (
        <CountContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CountContext.Provider>
    );
};

export const useCountContext = () => useContext(CountContext);
