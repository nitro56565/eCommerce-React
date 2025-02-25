import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Footer from './Components/Footer';
import InstaLink from './Components/InstaLink';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import Catalogue from './Components/Catalogue';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);
  

  return (
    <>
     
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home handleLogin={handleLogin}/>}></Route>
       <Route path="/dashboard" element={isAuthenticated ? <Catalogue /> : <Navigate to="/login" />} ></Route>

      </Routes>
    </BrowserRouter> */}
    <Catalogue/>

    </>
  )
}

export default App
