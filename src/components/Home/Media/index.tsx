"use client";
import React from "react";
import Image from "next/image";
import { SocialMediaData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Media = () => {
  return (
    <section className="relative overflow-hidden py-20" id="MediaSosial">
      {/* Background image di kanan dengan custom size */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end pointer-events-none">
        <div className="relative w-[500px] h-[600px] lg:w-[600px] lg:h-[700px]">
          <Image
            src="/images/medsos/bg-sosmed.png"
            alt="Mahasiswa"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>

      {/* Konten utama */}
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
        <h2 className="text-midnight_text text-5xl font-semibold mb-12">
          Media Sosial
        </h2>

        {/* Wrapper konten */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]  p-6 sm:p-8  w-[85%] md:w-[70%] lg:w-[80%]">
            {/* Scroll horizontal list */}
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                {SocialMediaData.map((item, i) => (
                <div
                    key={i}
                    className="flex-shrink-0 w-56 sm:w-60 md:w-64 rounded-xl overflow-hidden shadow group snap-start transition duration-300"
                >
                    <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden"
                    >
                    <Image
                        src={`${getImagePrefix()}${item.imgSrc}`}
                        alt={`Media Sosial ${i + 1}`}
                        width={300}
                        height={300}
                        className="object-cover w-full h-48 sm:h-52 md:h-56 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    </a>
                </div>
                ))}
            </div>
            </div>

      </div>
    </section>
  );
};

export default Media;
