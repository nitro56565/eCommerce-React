import React from 'react';
import { FaRegClock } from "react-icons/fa";  // Watch/Timer Icon
import { FaRegCalendarAlt } from "react-icons/fa";
function Blogs() {
    const blogData = [
        {
            img: "https://s3-alpha-sig.figma.com/img/d161/c5f7/06433f2420891f403a591b053ab0ddfd?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VOuqjZpRnwyIqDV-Rs7SRcPay-NiH436nugBntZP5eXJbxwDaJPi733DWrcHk~Sqr3CaMIG3SnOJAopraXkizauW1xgfyKxbihbE405ychf96~EkB9Um0bIoO98BuqLZPvUe-KPv81VBTKyUwBhcghH2-mz4YoOEEQovGqziXAfTG4UL8t23WuGELjcfGrdDxJa0cuM5PTIACtoo7L3mHtWlrF5ciN5eR4if6dHF-je~9fws0PpOMlcqJLYANHBD4rEqsvqHdLDSLZtyrTmRLeajcj-FkH1OZ2~dLywX5SlHSG3M-WGqi0wU~zd0xJXtFdR9y8olHvoJrUUrEDL-Eg__",
            title: "Going all-in with millennial design",
            time: "5 min",
            date: "12th Oct 2022",
        },
        {
            img: "https://s3-alpha-sig.figma.com/img/d424/06dc/2730568e294fb8ff45f6b0b0ce5dfec1?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YLyiw-yRdNvlIlbM6awudVL~HdjhAMC5YyRjbhweXMVOexwLqh4NEdN6J~ssmagIsaJQtTlMoNK8G~nXjA3BKdiSeIZu2-FYMk663eFycYiEyftKkfxbtpRWoNB89tFfrgC3XyXGKKT3mOglSFNC5Wd2A9-GHdYCJxGZ5u8DhBsVDn-SkeLyD~Mta8hqNtRdxOP5DF6fi5aQJGx1wbcWFHbL7RMISG1tRvcC9unHi~9PP3tKMRjXiDjrcWK4IUgHducToReVEcgVR7pR2TW804hvkbFSBaTuZIVb4VK2P4TaApKmjYCX-KpW5ViHRS6k3n9wGpAA4TOG21nVfU0u4g__",
            title: "Going all-in with millennial design",
            time: "7 min",
            date: "15th Nov 2022",
        },
        {
            img: "https://s3-alpha-sig.figma.com/img/21ad/18b9/74d9976eaa2789b598b2896a0149302a?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I9kaN71o16izYFz~si4CCaxOfiXtTywCl0~8bzs5vZ8Gu6yuJryljGVJZYAYLwRYwD47FfM~csjTAbsuifU4cQOrgPvKexY9qCXIoS2zyl2g-jo1g-3j7vVBVVyVALE2XcBQvadBRKzVooepTilAwGMSr7oZURm0y2g7ksSmu7MtgHuDwInOqls5k28l6Pte06MUuedVyt16ILP-VN2eN4lxlzxfmwMZZuC4ySoehzSIVC16EMLkzFETsn65mknkqbKZXloIiN7yYUIAicWKrItS8TlVz4wDKFdeGuxTLbKlyDKT2oCujNCwhDrZdqw4YsoINrEGvvvg6ajRB6u3qA__",
            title: "Going all-in with millennial design",
            time: "6 min",
            date: "20th Dec 2022",
        },
    ];
    return (<>
        <div className='p-10'>
            <h1 className='p-4 text-2xl md:text-3xl font-bold  justify-center text-center h-15'>Our Blogs</h1>
            <p className='text-center text-gray-600 text-sm'>Find a bright ideal to suit your taste with our great selection </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center mx-auto p-10">
                {blogData.map((blog, index) => (
                    <div
                        key={index}
                        className="w-full md:w-3/4 p-2 bg-white shadow-lg rounded-lg overflow-hidden text-center"
                    >
                        <img src={blog.img} alt={blog.title} className="w-full rounded-lg h-48 object-cover" />

                        <div className="p-4 text-center">
                            <p className='text-sm'>{blog.title}</p>

                            {/* Button */}
                            <button
                                className='pt-4 font-lg font-bold underline decoration-[1px]  decoration-gray-800 underline-offset-[5px]'>
                                Read More
                            </button>

                            {/* Time & Date in one line */}
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

        </div></>)
}
export default Blogs;