import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    // Check if the current route is '/dashboard'
    const isDashboard = location.pathname === "/dashboard";


    return (
        <div className={`h-[100px] ${isDashboard ? "bg-[#FBEBB5]" : "bg-white"} flex items-center `}>

            <div className='flex-1 flex justify-center h-[24px] md:ml-16'>
                <div className='flex gap-4 md:gap-[50px] text-center'>
                    <div className='font-semibold text-base'>Home</div>
                    <div className='font-semibold text-base'>Shop</div>
                    <div className='font-semibold text-base'>About</div>
                    <div className='font-semibold text-base'>Contact</div>
                </div>
            </div>



            <div className='hidden md:flex flex-row h-[28px] gap-[40px] mr-[100px] '>
                <div className='h-[28px]'>
                    <img src='./src/assets/mdi_account-alert-outline.svg' alt='account-icon' />
                </div>
                <div className='h-[28px]'>
                <img src='./src/assets/akar-icons_heart.svg' alt='account-icon' />
                </div>
                <div className='h-[28px]'>
                <img src='./src/assets/akar-icons_search.svg' alt='account-icon' />
                </div>
                <div className='h-[28px]'>
                <img src='./src/assets/ant-design_shopping-cart-outlined.svg' alt='account-icon' />
                </div>
            </div>

            <div className='block md:hidden ml-auto relative top-1'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {isOpen && (
                <div className='absolute w-full top-20 left-0  bg-[#FBEBB5] p-5 shadow-lg flex flex-col items-center gap-4 md:hidden'>
                    <div><img src='./src/assets/mdi_account-alert-outline.svg' alt='account-icon' /></div>
                    <div><img src='./src/assets/akar-icons_heart.svg' alt='account-icon' /></div>
                    <div> <img src='./src/assets/akar-icons_search.svg' alt='account-icon' /></div>
                    <div><img src='./src/assets/ant-design_shopping-cart-outlined.svg' alt='account-icon' /></div>
                </div>
            )}

        </div>

    )
}

export default Navbar