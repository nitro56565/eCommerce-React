import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Components/Shop';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import ScrollToTop from './Components/ScrollToTop';
import { CountProvider } from './hooks/UseCountContext';
import Dashboard from './Components/Dashboard';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);


  return (
    <>
      <CountProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            {/* <Route path="/dashboard" element={isAuthenticated ? <Catalogue /> : <Navigate to="/login" />} ></Route> */}
            <Route path='/shop' element={<Shop />} />
            <Route path='/checkout' element={<CheckOut />} />
       </Routes>
        </BrowserRouter>
      </CountProvider>


    </>
  )
}

export default App
