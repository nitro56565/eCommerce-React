import React from 'react';
function InstaLink(params) {
    return (

        <div className="relative h-64 md:h-80 lg:h-96 w-full flex items-center justify-center text-center">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("/InstaLink.png")` }}
            ></div>
            <div className="absolute inset-0 bg-[#FAF4F4] opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black">Our Instagram</h2>
                <p className="mt-2 text-sm md:text-base text-black">Follow our store on Instagram</p>
                <button className="mt-4 px-6 py-2 border  text-black bg-[#FAF4F4]  rounded-full shadow-lg hover:shadow-4xl focus:shadow-4xl active:shadow-md transition-all duration-300 ease-in-out" >
                    Follow Us
                </button>

            </div>
        </div>





    );
}
export default InstaLink;