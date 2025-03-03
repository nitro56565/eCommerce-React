import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import ProductDetails from './ProductDetails'
import SidebarCart from './SidebarCart'
import { CountProvider, useCountContext } from '../hooks/UseCountContext'
import Footer from './Footer'
import Navbar from './Navbar'

const CatalogueContent = () => {
    const [data, setData] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const { cartItems } = useCountContext()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [page, setPage] = useState(1)
    const itemsPerPage = 10

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data))
            .catch(err => console.log(err))
    }, [])

    const selectPagehandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page)
            setPage(selectedPage)
    }

    const startItem = (page - 1) * itemsPerPage + 1
    const endItem = Math.min(page * itemsPerPage, data.length)

    return (
        <>
        <Navbar/>
            <div className="text-center text-xs md:text-base font-normal my-4 bg-[#FAF4F4] w-[80%] m-auto p-3">
                Showing {startItem} - {endItem} of {data.length} results
            </div>

            <div className='mb-10'>
                <button type='button'
                    onClick={() => setIsCartOpen(true)}
                    className="fixed top-5 right-5 bg-[#FFF9E5] text-black px-4 py-2 rounded-full shadow-lg"
                >
                    🛒 {cartItems.length}
                </button>

                {isCartOpen && <SidebarCart cart={cartItems} onClose={() => setIsCartOpen(false)} />}

                {selectedProduct ? (
                    <ProductDetails
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 mx-5 md:mx-12 mt-10 pb-1">
                        {data.slice(startItem - 1, endItem).map(product => (
                            <Card
                                key={product.id}
                                product={product}
                                onClick={() => setSelectedProduct(product)}
                            />
                        ))}
                    </div>
                )}

                {data.length > 0 && (
                    <div className='flex justify-center gap-4 px-3 md:px-0'>
                        <span
                            className={`p-3 rounded-lg hover:cursor-pointer hover:shadow-lg transition-shadow duration-20 bg-[#FFF9E5] 
                                ${page === 1 ? 'bg-[#f5f0df] text-gray-500 cursor-not-allowed' : ''}`}
                            onClick={() => selectPagehandler(page - 1)}
                        >
                            Previous
                        </span>
                        {[...Array(data.length / 10)].map((_, i) => (
                            <span
                                onClick={() => selectPagehandler(i + 1)}
                                key={i}
                                className={`p-3 rounded-lg hover:cursor-pointer bg-[#FFF9E5] hover:shadow-lg transition-shadow duration-20 ${page === i + 1 ? 'bg-[#eee0b1]' : ''}`}>
                                {i + 1}
                            </span>
                        ))}
                        <span
                            className={`p-3 rounded-lg hover:cursor-pointer hover:shadow-lg transition-shadow duration-20 bg-[#FFF9E5] 
                                ${page === Math.ceil(data.length / itemsPerPage) ? 'bg-[#f5f0df] text-gray-500 cursor-not-allowed' : ''}`}
                            onClick={() => selectPagehandler(page + 1)}
                        >
                            Next
                        </span>
                    </div>
                )}



            </div>
            <Policies />
            <Footer/>
        </>
    )
}

const Catalogue = () => {
    return (
        <CountProvider>
            <CatalogueContent />
        </CountProvider>
    )
}

export default Catalogue
