import React from 'react'
import Navbar from './Navbar';
import Catalogue from './Catalogue';
import Policies from './Policies';
import Footer from './Footer';
import ImageHeroSection from './ImageHeroSection';
function Shop(params) {
    return (<>
    <Navbar/>
    <ImageHeroSection params={"Shop"}/>
    <Catalogue/>
    <Policies/>
    <Footer/></>)
}
export default Shop; 