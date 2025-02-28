import React from "react";
import Navbar from "./Navbar";
import ImageHeroSection from "./ImageHeroSection";
import BillingDetail from "./BillingDetail";
import Policies from "./Policies";
import Footer from "./Footer";
function CheckOut(params) {
    return(<>
    <Navbar/>
    <ImageHeroSection params={"Checkout"}/>
    <BillingDetail/>
    <Policies/>
    <Footer/>
    </>);
}
export default CheckOut; 