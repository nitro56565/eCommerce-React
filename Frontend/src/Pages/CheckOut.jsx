"use client"
import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import ImageHeroSection from "../Components/ImageHeroSection";
import BillingDetail from "../Components/BillingDetail";
import Policies from "../Components/Policies";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

function CheckOut(params) {

    const location = useLocation();
    const cartItems = location.state?.cart || [];
    const loadScript = (src) =>{
        return new Promise((resolve) =>{
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            }
            script.onerror =()=>{
                resolve(false);
            }
            document.body.appendChild(script)
        })
    }

    

    useEffect(()=>{
        loadScript('https://checkout.razorpay.com/v1/checkout.js')
    },[])
    
    return(<>
    <Navbar/>
    <ImageHeroSection params={"Checkout"}/>
    <BillingDetail cartItems={cartItems} />
    <Policies/>
    <Footer/>
    </>);
}
export default CheckOut; 