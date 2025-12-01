"use client";

import React from "react";
import { CalendarDays, User } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

// === Komponen Bullet seperti gambar ===
const BulletItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3 text-lg text-gray-900">
      <span
        className="
          flex-shrink-0 
          mt-1 
          flex items-center justify-center 
          w-7 h-7 min-w-7 min-h-7 
          rounded-full 
          bg-yellow-500 
          text-white 
          font-bold
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
  
      <span className="leading-relaxed">{children}</span>
    </li>
  );
  

const Visi = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/profil", text: "Visi Misi" },
  ];

  return (
    <section className="pt-10">

      {/* === Header === */}
      <div className="max-w-7xl mx-auto text-center text-gray-700 leading-relaxed space-y-8">
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

      {/* === Section Visi === */}
      <div className="max-w-4xl mx-auto text-center py-16 px-6 relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-6xl font-serif text-gray-900">
          &ldquo;
        </span>

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

    <div className="max-w-7xl mx-auto px-6 pt-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            
            {/* Gambar di Kiri */}
            <div className="md:col-span-5 w-full">
                <img
                    src="/images/profile/uin.jpg"
                    alt="Misi Departemen Sosiologi"
                    className="rounded-xl shadow-md w-full object-cover"
                />
            </div>

            {/* List Misi */}
            <div className="md:col-span-7 max-w-4xl px-4 md:px-6">
                <h4 className="text-3xl font-semibold text-gray-900">Misi</h4>
                <h4 className="text-3xl font-semibold text-primary mb-10">Departemen Sosiologi</h4>
                <ul className="space-y-4 text-left">
                    <BulletItem>
                    Menyelenggarakan pendidikan tinggi dengan kualitas unggul, berdaya
                    saing global yang berorientasi pada pengkajian, penguasaan dan
                    pengembangan Sosiologi yang berkarakter Rahmatan lil Alamin.
                    </BulletItem>

                    <BulletItem>
                    Menciptakan lulusan yang memiliki kecakapan mental, spiritual dan
                    intelektual terutama di bidang Sosiologi.
                    </BulletItem>

                    <BulletItem>
                    Berinovasi dan responsif terhadap perkembangan ilmu pengetahuan dan
                    teknologi dalam upaya meningkatkan kemandirian lulusan di bidang
                    Sosiologi.
                    </BulletItem>
                </ul>
            </div>
        </div>
    </div>

    {/* === Section Tujuan === */}
    {/* Background full */}
    <div className="w-full bg-white py-20">
        {/* Content wrapper sejajar dengan section lain */}
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                {/* Konten Teks */}
                <div className="md:col-span-7">
                    <h4 className="text-3xl font-semibold text-gray-900">Tujuan</h4>
                    <h4 className="text-3xl font-semibold text-primary mb-10">Departemen Sosiologi</h4>
                    <ul className="space-y-4 text-left">
                        <BulletItem>
                            Terselenggaranya pengajaran, penelitian, pengabdian dalam membantu
                            memecahkan masalah di masyarakat sesuai dengan perubahan sosial baik
                            di tingkat lokal, nasional maupun di Asia Tenggara.
                        </BulletItem>

                        <BulletItem>
                            Terbentuknya sarjana sosiologi yang mempunyai kemampuan dan
                            kecakapan mental, spiritual dan intelektual di bidang sosiologi.
                        </BulletItem>

                        <BulletItem>
                            Terbentuknya sarjana sosiologi yang mampu mengembangkan dan
                            memberdayakan masyarakat menuju tatanan masyarakat madani yang
                            demokratis dan berkeadilan.
                        </BulletItem>
                    </ul>
                </div>

                {/* Gambar di sebelah kanan */}
                <div className="md:col-span-5 w-full">
                    <img
                    src="/images/profile/uin.jpg"
                    alt="Misi Departemen Sosiologi"
                    className="rounded-xl shadow-md w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>


    {/* === Section Sasaran === */}
    <div className="max-w-7xl mx-auto text-left px-6 pb-10 pt-20">
        <h4 className="text-3xl font-semibold text-gray-900">Sasaran</h4>
        <h4 className="text-3xl font-semibold text-primary mb-10">Departemen Sosiologi</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 text-left">
            <BulletItem>Meningkatnya pemerataan akses pendidikan yang berkualitas</BulletItem>
            <BulletItem>Meningkatnya kualitas moderasi beragama dan kerukunan umat beragama</BulletItem>
            <BulletItem>Meningkatnya tata kelola kepemerintahan yang efektif, transparan, dan akuntabel</BulletItem>
            <BulletItem>Meningkatnya kualitas mental/karakter Mahasiswa</BulletItem>
            <BulletItem>Meningkatnya kualitas pembelajaran dan pengajaran</BulletItem>
            <BulletItem>Peningkatan kualitas sumber daya manusia</BulletItem>
            <BulletItem>Meningkatnya kualitas tata kelola Pendidikan</BulletItem>
            <BulletItem>Meningkatnya kualitas penjaminan mutu Pendidikan</BulletItem>
            <BulletItem>Meningkatnya kualitas pendidikan dan pelatihan vokasi</BulletItem>
            <BulletItem>Menguatnya pendidikan tinggi yang berkualitas</BulletItem>
            <BulletItem>Meningkatnya kualitas kerja sama</BulletItem>
        </ul>
    </div>

    </section>
  );
};

export default Visi;
