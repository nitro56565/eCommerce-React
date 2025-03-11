import React, { useState, useRef, useEffect } from 'react'
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import SidebarCart from './SidebarCart';
import { useCountContext } from '../hooks/UseCountContext';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = useCountContext();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const isDashboard = location.pathname === "/dashboard";


    return (
        <div className={`h-[100px] ${isDashboard ? "bg-[#FBEBB5]" : "bg-white"} flex items-center `}>

            <div className='flex-1 flex justify-center h-[24px] md:ml-16'>
                <div className='flex gap-4 md:gap-[50px] text-center'>
                    <div className='font-semibold text-base hover:cursor-pointer' ><Link to="/dashboard" className="no-underline text-black"> Home </Link></div>
                    <div className='font-semibold text-base hover:cursor-pointer'><Link to="/shop" className="no-underline text-black">Shop </Link></div>
                    <div className='font-semibold text-base hover:cursor-pointer'><Link to="/dashboard" className="no-underline text-black">About </Link></div>
                    <div className='font-semibold text-base hover:cursor-pointer'><Link to="/dashboard" className="no-underline text-black">Contact</Link></div>
                </div>
            </div>



            <div className='hidden md:flex flex-row h-[28px] gap-[40px] mr-[100px] '>

                <div className="relative" ref={dropdownRef}>

                    <div
                        className="h-[28px] cursor-pointer flex items-center"
                        onClick={() => setOpen(!open)}
                    >
                        <img src="./src/assets/mdi_account-alert-outline.jpg" alt="account-icon" />
                    </div>


                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg  z-50">
                            <button
                                className="block w-full text-left px-4 py-2 text-black hover:bg-gray-500 bg-white "
                                onClick={() => {
                                    navigate("/myorders");
                                    setOpen(false);
                                }}
                            >
                                My Orders
                            </button>
                        </div>
                    )}
                </div>



                <div className='h-[28px]'>
                    <img src='./src/assets/akar-icons_heart.jpg' alt='account-icon' />
                </div>
                <div className='h-[28px] cursor-pointer relative' onClick={() => setIsCartOpen(true)}>
                    <img src='./src/assets/ant-design_shopping-cart-outlined.jpg' alt='cart-icon' />

                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                            {cartItems.length}
                        </span>
                    )}
                </div>
            </div>

            <div className='block md:hidden ml-auto relative top-1'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {isOpen && (
                <div className= {`absolute w-full top-20 left-0  ${isDashboard ? "bg-[#FBEBB5]" :"bg-white"} p-5 shadow-lg flex flex-col items-center gap-4 md:hidden z-10`}>
                    <div className="relative" ref={dropdownRef}>
                        <div onClick={() => setOpen(!open)}>

                            <img src='./src/assets/mdi_account-alert-outline.jpg' alt='account-icon' /></div>
                        {open && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg  z-20">
                                <button
                                    className="block w-full text-left px-4 py-2 text-black hover:bg-gray-500 bg-white "
                                    onClick={() => {
                                        navigate("/myorders");
                                        setOpen(false);
                                    }}
                                >
                                    My Orders
                                </button>
                            </div>
                        )}
                    </div>
                    <div><img src='./src/assets/akar-icons_heart.jpg' alt='account-icon' /></div>
                    <div> <img src='./src/assets/akar-icons_search.jpg' alt='account-icon' /></div>
                    <div className='cursor-pointer' onClick={() => setIsCartOpen(true)}>
                        <img src='./src/assets/ant-design_shopping-cart-outlined.jpg' alt='cart-icon' />
                        {cartItems.length > 0 && (
                        <span className="relative -top-11 -right-4 bg-red-500 text-white text-xs rounded-full px-2">
                            {cartItems.length}
                        </span>
                    )}
                    </div>
                </div>
            )}

            {isCartOpen && <SidebarCart cart={cartItems} onClose={() => setIsCartOpen(false)} />}

        </div>

    )
}

export default Navbar