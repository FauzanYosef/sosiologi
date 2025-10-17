"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NewsData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import { motion, AnimatePresence } from "framer-motion";

const News = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {Array(fullStars).fill(<Icon icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />)}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />}
                {Array(emptyStars).fill(<Icon icon="tabler:star-filled" className="text-gray-400 text-xl inline-block" />)}
            </>
        );
    };

    return (
        <section id="News">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center mb-20">
                    <h2 className="text-midnight_text text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">Berita Terbaru.</h2>
                    <Link href={'/'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Semua Berita&nbsp;&gt;&nbsp;</Link>
                </div>
                <Slider {...settings}>
                    {NewsData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 mb-12 px-3 pt-3 pb-6 shadow-lg rounded-2xl h-full'>
                                <div className="relative rounded-3xl">
                                    <Image src={`${getImagePrefix()}${items.imgSrc}`} alt="course-image" width={389} height={262} className="m-auto clipPath" />
                                    {/* <div className="absolute right-5 -bottom-2 bg-secondary rounded-full p-6">
                                        <h3 className="text-white uppercase text-center text-sm font-medium">best <br /> seller</h3>
                                    </div> */}
                                </div>

                                <div className="px-3 pt-6">
                                    <Link href="#" className='text-2xl font-bold text-black max-w-100% inline-block'>{items.heading}</Link>
                                    <div className="relative group">
                                        {/* Clamp text biar rapi */}
                                        <h3 className="text-base font-normal pt-6 text-black/75 line-clamp-2">
                                            {items.name}
                                        </h3>

                                        {/* Tooltip muncul saat hover */}
                                        <AnimatePresence>
                                            <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute z-20 hidden group-hover:block bg-gray-900 text-white text-sm rounded-lg px-3 py-2 w-64 -top-16 left-1/2 -translate-x-1/2 shadow-lg"
                                            >
                                            {items.name}
                                            {/* segitiga kecil di bawah tooltip */}
                                            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    <div className="flex items-center pt-6">
                                        <div className="flex gap-2">
                                            <Icon
                                                icon="mdi:calendar-month"
                                                className="text-primary text-xl inline-block me-2"
                                            />
                                            <h3 className="text-base font-small text-black opacity-60 ">{items.dated}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default News;
