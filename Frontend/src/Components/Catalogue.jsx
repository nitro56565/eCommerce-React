
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import ProductDetails from './ProductDetails'
import SidebarCart from './SidebarCart' 
import Policies from './Policies'


const Catalogue = () => {
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false) 
   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    
    const addToCart = (product) => {
        setCart([...cart, product])
        setSelectedProduct(null)
    }

    return (
        <>
        <div>
           
            <button 
                onClick={() => setIsCartOpen(true)} 
                className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
                🛒 {cart.length}
            </button>

           
            {isCartOpen && <SidebarCart cart={cart} onClose={() => setIsCartOpen(false)} />}

           
            {selectedProduct ? (
                <ProductDetails 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                    addToCart={addToCart}
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 mx-5 md:mx-12 mt-10 pb-1">
                    {data.map(product => (
                        <Card 
                            key={product.id} 
                            product={product} 
                            onClick={() => setSelectedProduct(product)} 
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            )}
        </div>
        <Policies/>
        </>
    )
}

export default Catalogue
