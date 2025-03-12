import React from "react";

function ImageHeroSection({ params }) {
    return (
        <div className="relative h-64 md:h-80 lg:h-96 w-full flex items-center justify-center text-center">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url("/ImageHeroSection.png")` }}
            ></div>
            <div className="absolute inset-0 bg-[#FAF4F4] opacity-50"></div>

            <div className="relative z-0 flex flex-col items-center justify-center">
                <div
                    className="w-12 md:w-16 lg:w-20 h-10 md:h-20 lg:h-20 bg-contain bg-no-repeat bg-center"
                    style={{ backgroundImage: `url("/logo (2).png")` }}
                ></div>
                <h2 className="-mt-2 text-2xl md:text-2xl lg:text-3xl font-bold text-black">{params}</h2>

                <p className="text-sm md:text-base">Home {'>'} {params}</p>

            </div>
        </div>

    );
}

export default ImageHeroSection;