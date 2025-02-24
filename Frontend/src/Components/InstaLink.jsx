import React from 'react';
function InstaLink(params) {
    return (

        <div className="relative h-64 md:h-80 lg:h-96 w-full flex items-center justify-center text-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/e49f/7c37/5c86e4d8f910d443c83a97a723571602?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kFzgpKhwC9W2Zscb6vtTLSxGMVElzYfKsi2gJDommd5FWRMKK55yLlQ0boVIAkZEfYYUZzHbfLT8G44jsZQvJrf3qEWsPamMUUqhs~wptRWAnxOSBD4YLXWOteiv6FKdOagfYuB2Ygr9j1~A0~VB7Xp3rD4OAwvChmu9oL85AIkD1nZkT79ZKtusYTpFh-hcLHaPrHNUXECOMTnfRHLFa4ZZy1pjXy2RaVJbzhwbKFopXCky8yYXKdE2-jrOTt75O5jIaznd2nz0FpLksmYHW1bcUyGt5Vp7oL~FZ6WU6J3JJ2igre0IjqtfaK9cwuNcr~0anuHf0AHBddGUq2oh5Q__")` }}
            ></div>
            <div className="absolute inset-0 bg-[#FAF4F4] opacity-50"></div>
            {/* Content (Always Above Everything) */}
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