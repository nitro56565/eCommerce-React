
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import ProductDetails from './ProductDetails'
import SidebarCart from './SidebarCart' 
import Policies from './Policies'
import { useCountContext } from '../context/CountContext'


const Catalogue = () => {
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const {cartItems, setCartItems} = useCountContext()
    const [isCartOpen, setIsCartOpen] = useState(false) 
    const [page, setPage] = useState(1);
   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    const selectPagehandler = (selectedPage) =>{
        if(selectedPage >=1 && selectedPage<=data.length/10 && selectedPage!= page)
        setPage(selectedPage)
    }

    
    // const addToCart = (product) => {
    //     setCart([...cart, product])
    //     setSelectedProduct(null)
    // }

    return (
        <>
        <div className='mb-10'>
           
            <button 
                onClick={() => setIsCartOpen(true)} 
                className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
            >
                🛒 {cartItems.length}
            </button>

           
            {isCartOpen && <SidebarCart cart={cartItems} onClose={() => setIsCartOpen(false)} />}

           
            {selectedProduct ? (
                <ProductDetails 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                    // addToCart={addToCart}
                />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 mx-5 md:mx-12 mt-10 pb-1">
                    {data.slice(page *10 -10 ,page * 10).map(product => (
                        <Card 
                            key={product.id} 
                            product={product} 
                            onClick={() => setSelectedProduct(product)} 
                            // addToCart={addToCart}
                        />
                    ))}
                </div>
            )}

            {
            data.length > 0 && 
            <div className='flex justify-center gap-4'>
                <span className='p-3 border hover:cursor-pointer hover:shadow-lg transition-shadow duration-20' onClick={()=> selectPagehandler(page-1)}>◀️</span>
                {
                    [...Array(data.length / 10)].map((_, i)=>{
                        return <span 
                        onClick={()=> selectPagehandler(i+1)} 
                        key={i} 
                        className='p-3 border hover:cursor-pointer hover:shadow-lg transition-shadow duration-20'> {i+1}</span>
                    })
                }
                
                <span className='p-3 border hover:cursor-pointer hover:shadow-lg transition-shadow duration-20' onClick={()=> selectPagehandler(page+1)}>▶️</span>
            </div>
            }
        </div>
        <Policies/>
        </>
    )
}

export default Catalogue
