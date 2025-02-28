import React from "react";
import Navbar from "./Navbar";
import ImageHeroSection from "./ImageHeroSection";
import BillingDetail from "./BillingDetail";
import Policies from "./Policies";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
function CheckOut(params) {

    const location = useLocation();
    const cartItems = location.state?.cart || [];
    return(<>
    <Navbar/>
    <ImageHeroSection params={"Checkout"}/>
    <BillingDetail cartItems={cartItems}/>
    <Policies/>
    <Footer/>
    </>);
}
export default CheckOut; 