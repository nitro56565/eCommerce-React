import React from 'react'
import Navbar from '../Components/Navbar';
import Catalogue from '../Components/Catalogue';
import Policies from '../Components/Policies';
import Footer from '../Components/Footer';
import ImageHeroSection from '../Components/ImageHeroSection';
function Shop(params) {
    return (<>
    <Navbar/>
    <ImageHeroSection params={"Shop"}/>
    <Catalogue/>
    <Policies/>
    <Footer/></>)
}
export default Shop; 