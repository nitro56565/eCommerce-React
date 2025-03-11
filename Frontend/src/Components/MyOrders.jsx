import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Policies from "./Policies";
import Footer from "./Footer";
import ImageHeroSection from './ImageHeroSection';
import axios from "axios";
import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

function MyOrders(params) {
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            console.log("Fetching orders..."); 

            try {
                const response = await axios.get(`${API_URL}/getUserOrders`, { withCredentials: true });
                console.log("API Response:", response.data); 
                setMyOrders(response.data.userOrders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };

        fetchOrders();
    }, []);


    return (<>
        <Navbar />
        <ImageHeroSection params={"My Orders"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 mx-5 md:mx-12 mt-10 pb-1">
            {myOrders
                .map((product , index) => (<div key={index}>
                    {console.log(product.orders)}
                    <div className="w-full h-60 flex justify-center items-center overflow-hidden">
                        <img src={product.orders[0].image} alt="" className="w-full h-full object-contain" />
                    </div>


                    <div className="w-full p-2 flex flex-col space-y-3">
                        <p className="font-normal line-clamp-2">{product.orders[0].title}</p>
                        <h2 className="font-semibold text-2xl">$ {product.orders[0].price}</h2>
                    </div>
                </div>
                ))}
        </div>
        <Policies />
        <Footer /></>);
}
export default MyOrders;