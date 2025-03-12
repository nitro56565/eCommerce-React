import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import CheckOut from './Pages/CheckOut';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop';
import { CountProvider } from './hooks/UseCountContext';
import Dashboard from './Pages/Dashboard';
import ThankYouPage from './Pages/ThankYouPage';
import MyOrders from './Pages/MyOrders';




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
