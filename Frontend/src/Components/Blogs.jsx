import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
function Blogs() {
    const blogData = [
        {
            img: "/Rectangle 13.png",
            title: "Going all-in with millennial design",
            time: "5 min",
            date: "12th Oct 2022",
        },
        {
            img: "/Rectangle 14.png",
            title: "Going all-in with millennial design",
            time: "7 min",
            date: "15th Nov 2022",
        },
        {
            img: "/Rectangle 15.png",
            title: "Going all-in with millennial design",
            time: "6 min",
            date: "20th Dec 2022",
        },
    ];
    return (
        <>
            <div className='p-10'>
                <h1 className='p-4 text-2xl md:text-3xl font-bold  justify-center text-center h-15'>Our Blogs</h1>
                <p className='text-center text-gray-600 text-sm'>Find a bright ideal to suit your taste with our great selection </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center mx-auto p-10">
                    {blogData.map((blog, index) => (
                        <div
                            key={index}
                            className="w-full md:w-3/4 p-2 bg-white shadow-lg rounded-lg overflow-hidden text-center mt-4 md:mt-0"
                        >
                            <img src={blog.img} alt={blog.title} className="w-full rounded-lg h-48 object-cover" />

                            <div className="p-4 text-center">
                                <p className='text-sm'>{blog.title}</p>


                                <button
                                    className='pt-4 font-lg font-bold underline decoration-[1px]  decoration-gray-800 underline-offset-[5px]'>
                                    Read More
                                </button>


                                <div className="flex align-center gap-3 text-center justify-center mt-3 text-gray-600 text-sm">
                                    <p className="flex items-center gap-1 t">
                                        <FaRegClock className="text-black " /> {blog.time}
                                    </p>
                                    <p className="flex items-center gap-1 ">
                                        <FaRegCalendarAlt className="text-black " /> {blog.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center align-center justify-center text-center '>
                    <button
                        className='pt-4 underline font-sm font-bold decoration-[1px]  decoration-gray-800 underline-offset-[6px]'>View All Posts </button>
                </div>

            </div>
        </>
    )
}
export default Blogs;