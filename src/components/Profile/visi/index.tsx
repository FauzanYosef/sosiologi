"use client";

import React from "react";
import { CalendarDays, User } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const Visi = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/profil", text: "Visi Misi" },
  ];

  return (
    <section className="pt-10">
      {/* === Header satu kolom (centered) === */}
        <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed space-y-8">
            <Breadcrumb links={breadcrumbLinks} />

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Visi & Misi <br />
            <span className="text-primary">Departemen Sosiologi</span>
            </h2>

            <div className="flex justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-yellow-500" />
                <span>29 March 2021, 00.23</span>
            </div>
            <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-yellow-500" />
                <span>Oleh : Admin</span>
            </div>
            </div>
        </div>
        

        {/* === Section Visi seperti testimonial === */}
        <div className="max-w-4xl mx-auto text-center py-16 px-6 relative">
            {/* tanda kutip kiri */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-6xl font-serif text-gray-900">
            &ldquo;
            </span>

            {/* tanda kutip kanan */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-6xl font-serif text-gray-900">
            &rdquo;
            </span>

            <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-800 max-w-3xl mx-auto">
            Menjadi Program Studi yang unggul, kompetitif, dan inovatif dalam
            bidang Sosiologi berbasis Rahmatan lil Alamin di Asia Tenggara Tahun
            2029.
            </p>

        </div>

        <hr className="my-10 border-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* === Section Misi === */}
        <div className="max-w-4xl mx-auto text-center px-6 pt-5 pb-20">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Misi</h4>
            <ul className="text-gray-700 text-lg space-y-3 list-disc list-inside text-left inline-block">
            <li>
                Menyelenggarakan pendidikan tinggi dengan kualitas unggul, berdaya
                saing global yang berorientasi pada pengkajian, penguasaan dan
                pengembangan Sosiologi yang berkarakter Rahmatan lil Alamin.
            </li>
            <li>
                Menciptakan lulusan yang memiliki kecakapan mental, spiritual dan
                intelektual terutama di bidang Sosiologi.
            </li>
            <li>
                Berinovasi dan responsif terhadap perkembangan ilmu pengetahuan dan
                teknologi dalam upaya meningkatkan kemandirian lulusan di bidang
                Sosiologi.
            </li>
            </ul>
        </div>

        {/* === Section Tujuan === */}
        <div className="max-w-4xl mx-auto text-center px-6 pb-20">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Tujuan</h4>
            <ul className="text-gray-700 text-lg space-y-3 list-disc list-inside text-left inline-block">
            <li>
            Terselenggaranya pengajaran, penelitian, pengabdian dalam membantu memecahkan masalah di masyarakat 
            sesuai dengan perubahan sosial baik di tingkat lokal, nasional maupun di Asia Tenggara.
            </li>
            <li>
            Terbentuknya sarjana sosiologi yang mempunyai kemampuan dan kecakapan mental, 
            spiritual dan intelektual di bidang sosiologi.

            </li>
            <li>
            Terbentuknya sarjana sosiologi yang mampu mengembangkan dan memberdayakan 
            masyarakat menuju tatanan masyarakat madani yang demokratis dan berkeadilan.
            </li>
            </ul>
        </div>

        {/* === Section Sasaran === */}
        <div className="max-w-4xl mx-auto text-center px-6 pb-20">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">Sasaran</h4>
            <ul className="text-gray-700 text-lg space-y-3 list-disc list-inside text-left inline-block">
                <li>
                Meningkatnya pemerataan akses pendidikan yang berkualitas
                </li>
                <li>
                Meningkatnya kualitas moderasi beragama dan kerukunan umat beragama
                </li>
                <li>
                Meningkatnya tata kelola kepemerintahan yang efektif, transparan, dan akuntabel
                </li>    <li>
                Meningkatnya kualitas mental/karakter Mahasiswa
                </li>
                <li>
                Meningkatnya kualitas pembelajaran dan pengajaran
                </li>
                <li>
                Peningkatan kualitas sumber daya manusia
                </li>
                <li>
                Meningkatnya kualitas tata kelola Pendidikan
                </li>
                <li>
                Meningkatnya kualitas penjaminan mutu Pendidikan
                </li>
                <li>
                Meningkatnya kualitas pendidikan dan pelatihan vokasi
                </li>
                <li>
                Menguatnya pendidikan tinggi yang berkualitas
                </li>
                <li>
                Meningkatnya kualitas kerja sama
                </li>
            </ul>
        </div>

    </section>
  );
};

export default Visi;
