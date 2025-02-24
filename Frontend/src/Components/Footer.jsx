import React from "react";

function Footer(params) {
    return (
        <>
            <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                <footer className="bg-white py-8 px-4 md:px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h5 className="text-gray-500 font-semibold text-lg mb-3">Location</h5>
                            <p className="text-gray-500">
                                202 Malini Bungalow, Deenanath Mangeshkar Road, Pune 411042
                            </p>
                        </div>
                        <div>
                            <h5 className="text-gray-500 font-semibold text-lg mb-3">Links</h5>
                            <ul className="text-gray-500 space-y-2">
                                <li><a href="#" className="hover:text-gray-700">Home</a></li>
                                <li><a href="#" className="hover:text-gray-700">Shop</a></li>
                                <li><a href="#" className="hover:text-gray-700">About</a></li>
                                <li><a href="#" className="hover:text-gray-700">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-gray-500 font-semibold text-lg mb-3">Help</h5>
                            <ul className="text-gray-500 space-y-2">
                                <li><a href="#" className="hover:text-gray-700">Payment Option</a></li>
                                <li><a href="#" className="hover:text-gray-700">Returns</a></li>
                                <li><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div >
                            <h5 className="text-gray-500 font-semibold text-lg mb-3">Newsletter</h5>

                            <div className="flex items-center gap-2 ">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 w-1/2 pt-2 border-b border-gray-400 focus:outline-none focus:border-gray-600"
                                />
                                <button
                                    className="bg-transparent text-gray-800 pt-4 underline decoration-[1px] decoration-gray-800 underline-offset-[2px] hover:no-underline transition">
                                    Subscribe
                                </button>
                            </div>



                        </div>
                    </div>
                    <div className="border-t mt-8 pt-4 text-left text-gray-500 text-sm">
                        <p>2022 Meubel House. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Footer;