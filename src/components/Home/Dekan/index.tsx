"use client"
import React from "react";
import Image from "next/image";
import { DekanData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Dekan = () => {
    return (
        <section className="bg-deepSlate" id="Dekan">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative">
                <h2 className="text-midnight_text text-5xl font-semibold mb-12">
                    Dekan Fakultas Ilmu Sosial dan Ilmu Politik.
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DekanData.map((items, i) => (
                        <div key={i} className="text-center">
                            <div className="relative">
                                <Image
                                    src={`${getImagePrefix()}${items.imgSrc}`}
                                    alt="user-image"
                                    width={400}
                                    height={400} // tetap kotak
                                    className="m-auto  object-cover"
                                />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-lightblack">{items.name}</h3>
                                <h4 className="text-[10px] sm:text-[12px] lg:text-[14px] font-normal text-lightblack pt-2 opacity-50">{items.profession}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Dekan;
