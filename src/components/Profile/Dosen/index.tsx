"use client";
import React from "react";
import Image from "next/image";
import { LecturerData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";
import Breadcrumb from "@/components/Breadcrumb";

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/profil", text: "Dosen Departemen" },
];

const Dosen = () => {
  return (
    <section id="Dosen" className="py-12 bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center text-gray-700 leading-relaxed space-y-6 pb-20">
          <Breadcrumb links={breadcrumbLinks} />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Dosen <br />
            <span className="text-primary">Departemen Sosiologi</span>
          </h2>
        </div>

        {/* Grid Dosen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {LecturerData.map((lecturer, i) => (
            <div key={i} className="w-full h-80 perspective">
              <div className="relative w-full h-full flip-card cursor-pointer">

                {/* Depan */}
                <div className="absolute w-full h-full rounded-lg overflow-hidden shadow-lg backface-hidden">
                  <Image
                    src={`${getImagePrefix()}${lecturer.imgSrc}`}
                    alt={lecturer.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Belakang */}
                <div className="absolute w-full h-full rounded-2xl shadow-lg rotate-y-180 backface-hidden bg-white text-grey-900 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-md sm:text-lg lg:text-lg font-semibold">
                    {lecturer.name}
                  </h3>
                  <p className="text-sm mt-2">{lecturer.nip}</p>
                  <p className="text-sm mt-1">{lecturer.kajian}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Dosen;
