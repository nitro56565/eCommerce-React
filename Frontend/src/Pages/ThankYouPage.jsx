import React from "react";
import Navbar from "../Components/Navbar";
import Policies from "../Components/Policies";
import Footer from "../Components/Footer";
const ThankYouPage = () => {
    return (<>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF9E5] p-6">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
                <svg
                    className="w-16 h-16 text-green-500 m-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h1 className="text-2xl font-bold text-gray-800">Order Placed Successfully!</h1>
                <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been confirmed.</p>
                <a href="/shop" className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                    Continue Shopping
                </a>
            </div>
        </div>
        <Policies/>
        <Footer/>
        </>
    );
};

export default ThankYouPage;
