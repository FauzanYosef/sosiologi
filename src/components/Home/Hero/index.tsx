"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from "@/utils/util";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { heroSlides } from "@/app/api/data";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // memastikan tombol navigasi sudah siap di DOM
  }, []);

  return (
    <section id="home-section" className="Hero relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="h-[550px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "text" ? (
              <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
                  {/* TEXT */}
                  <div className="col-span-8 flex flex-col justify-center">
                    <div className="flex gap-2 mx-auto lg:mx-0 mb-5">
                      <Icon
                        icon="solar:verified-check-bold"
                        className="text-primary text-xl inline-block me-2"
                      />
                      <p className="text-primary text-sm font-semibold text-center lg:text-start">
                        Departemen Sosiologi
                      </p>
                    </div>
                    <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold leading-normal mb-2">
                      {slide.title1}
                    </h1>
                    <h1 className="text-midnight_text text-4xl sm:text-5xl font-semibold leading-normal mb-4">
                      {slide.title2}
                    </h1>
                    <h3 className="text-black/70 text-lg leading-relaxed mb-6">
                      {slide.subtitle}
                    </h3>
                    <div>
                      <button className="bg-primary text-white font-semibold px-6 py-4 rounded-full shadow-md hover:bg-primary/90 transition duration-300">
                        Lihat Departemen
                      </button>
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div className="col-span-4 flex justify-center relative">
                    <Image
                      src={`${getImagePrefix()}${slide.image}`}
                      alt={slide.name}
                      width={250}
                      height={500}
                      className="object-cover"
                    />
                    <div className="absolute bottom-8 bg-primary rounded-3xl shadow-lg px-6 py-3 text-center">
                      <p className="text-white font-semibold leading-tight">
                        {slide.name}
                      </p>
                      <span className="text-sm text-white leading-snug">
                        {slide.position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // FULL IMAGE SLIDE
              <div className="relative h-[550px] w-full">
                <Image
                  src={`${getImagePrefix()}${slide.image}`}
                  alt={slide.alt || "Banner"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ CUSTOM NAVIGATION BUTTONS — Chevron Style */}
      <button
        className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 
                   bg-white/70 hover:bg-white/90 text-gray-800 
                   p-3 rounded-full shadow-lg transition duration-300"
      >
        <Icon icon="mdi:chevron-left" className="text-3xl" />
      </button>

      <button
        className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-10 
                   bg-white/70 hover:bg-white/90 text-gray-800 
                   p-3 rounded-full shadow-lg transition duration-300"
      >
        <Icon icon="mdi:chevron-right" className="text-3xl" />
      </button>
    </section>
  );
};

export default Hero;
