import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Components/Shop';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import { CountProvider } from './hooks/UseCountContext';
import Dashboard from './Components/Dashboard';
import ThankYouPage from './Components/ThankYouPage';
import MyOrders from './Components/MyOrders';




function App() {


  return (
    <>
      <CountProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />} ></Route>
            <Route path='/shop' element={<Shop />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/orderSuccess' element={<ThankYouPage />} />
            <Route path='/myorders' element={<MyOrders />} />
          </Routes>
        </BrowserRouter>
      </CountProvider>


    </>
  )
}

export default App
