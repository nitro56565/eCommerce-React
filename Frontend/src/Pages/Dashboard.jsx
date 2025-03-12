import React from "react";
import HeroSection from '../Components/HeroSection.jsx';
import MainContent from "../Components/MainContent.jsx";
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx';
import InstaLink from '../Components/InstaLink.jsx';
import Blogs from '../Components/Blogs.jsx';
function Dashboard(params) {
    

    return (<>
        <Navbar  />
        <HeroSection />
        <MainContent />
        <Blogs />
        <InstaLink />
        <Footer />
    </>);
}
export default Dashboard;