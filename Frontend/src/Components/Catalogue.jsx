import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import ProductDetails from './ProductDetails';
import { useCountContext } from '../hooks/UseCountContext';
import { BiSort } from "react-icons/bi";
import useAuth from "../hooks/useAuth";


const CatalogueContent = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const [sortOrder, setSortOrder] = useState("default");

    const user = useAuth();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                const sortedData = [...response.data].sort((a, b) => a.title.localeCompare(b.title));
                setData(sortedData);
                setFilteredData(sortedData);
            } catch (error) {
                console.error("❌ Error fetching products:", error);
            }
        };
        fetchProducts();

    }, []);


    useEffect(() => {
        if (!searchValue.trim()) {
            setFilteredData(data);
        } else {
            const normalizedSearch = searchValue.replace(/\s+/g, "").toLowerCase();
            const results = data.filter(product =>
                product.title.replace(/\s+/g, "").toLowerCase().includes(normalizedSearch)
            );

            setFilteredData(results);
        }
        setPage(1);
    }, [searchValue, data]);




    const handleSort = () => {
        const sortedData = [...data].sort((a, b) =>
            sortOrder === "asc"
                ? b.title.localeCompare(a.title)
                : a.title.localeCompare(b.title)
        );
        setData(sortedData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };


    const selectPagehandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Math.ceil(filteredData.length / itemsPerPage) && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    const startItem = (page - 1) * itemsPerPage;
    const endItem = Math.min(page * itemsPerPage, filteredData.length);

    return (
        <>


            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-around md:gap-8 items-center  bg-[#FFF9E5] w-[80%] mx-auto mt-4 p-3 shadow-md rounded-lg">
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <img
                        src="./src/assets/akar-icons_search.svg"
                        alt="search-icon"
                        className="w-5 h-5"
                    />
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search..."
                        className="border border-gray-500 bg-white px-3 py-1 rounded-full outline-none focus:ring-2 focus:ring-gray-400 w-full md:w-auto"
                    />
                    <div className="cursor-pointer flex items-center" onClick={() => handleSort()}>
                        <BiSort size={27} />
                    </div>
                </div>
                <div className="text-gray-700 font-medium w-full md:w-auto text-center md:text-left">
                    <div className="text-sm md:text-base">
                        Showing {startItem + 1} - {endItem} of {filteredData.length} results
                    </div>
                </div>
            </div>



            <div className="mb-10">
                {selectedProduct ? (
                    <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 mx-5 md:mx-12 mt-10 pb-1">
                        {filteredData
                            .filter((_, index) => index >= startItem && index < endItem)
                            .map(product => (
                                <Card
                                    key={product.id}
                                    product={product}
                                    onClick={() => setSelectedProduct(product)}
                                />
                            ))}
                    </div>
                )}

                {filteredData.length > 0 && (
                    <div className="flex justify-center gap-4 px-3 md:px-0">
                        <span
                            className={`p-3 rounded-lg hover:cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-[#FFF9E5] 
                                ${page === 1 ? 'bg-[#f5f0df] text-gray-500 cursor-not-allowed' : ''}`}
                            onClick={() => selectPagehandler(page - 1)}
                        >
                            Previous
                        </span>
                        {[...Array(Math.ceil(filteredData.length / itemsPerPage))].map((_, i) => (
                            <span
                                onClick={() => selectPagehandler(i + 1)}
                                key={i}
                                className={`p-3 rounded-lg hover:cursor-pointer bg-[#FFF9E5] hover:shadow-lg transition-shadow duration-200 ${page === i + 1 ? 'bg-[#eee0b1]' : ''}`}>
                                {i + 1}
                            </span>
                        ))}
                        <span
                            className={`p-3 rounded-lg hover:cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-[#FFF9E5] 
                                ${page === Math.ceil(filteredData.length / itemsPerPage) ? 'bg-[#f5f0df] text-gray-500 cursor-not-allowed' : ''}`}
                            onClick={() => selectPagehandler(page + 1)}
                        >
                            Next
                        </span>
                    </div>
                )}
            </div>
        </>
    );
};

const Catalogue = () => {
    return <CatalogueContent />;
};

export default Catalogue;
