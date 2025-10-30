"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Puzzle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { CalendarDays, User } from "lucide-react";

const Profile = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/profil", text: "Profil" },
  ];

  return (
    <section className="pt-2">
      {/* === Header dua kolom (gambar di kanan, kiri lebih lebar) === */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        {/* Kiri: konten profil singkat */}
        <div className="md:col-span-3 space-y-8 text-center md:text-left text-gray-700 leading-relaxed order-2 md:order-1">
          <Breadcrumb links={breadcrumbLinks} />

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Profil <br />
            <span className="text-primary">Departemen Sosiologi</span>
          </h2>
          <div className="flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-yellow-500" />
            <span>29 March 2021, 00.23</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-yellow-500" />
            <span>Oleh : Admin</span>
          </div>
        </div>


          <p>
            Departemen Sosiologi merupakan bagian dari Fakultas Ilmu Sosial yang
            berkomitmen mengembangkan kajian sosial, budaya, dan kemasyarakatan
            secara ilmiah dan kritis. Sejak berdiri, departemen ini telah
            melahirkan lulusan yang berkontribusi di berbagai bidang seperti
            penelitian, pendidikan, pemerintahan, dan sektor sosial.
          </p>

          <p>
            Dengan dukungan tenaga pengajar profesional dan suasana akademik yang
            kondusif, Departemen Sosiologi terus memperkuat kualitas pembelajaran
            dan riset untuk menjawab tantangan sosial di era digital.
          </p>
        </div>

        {/* Kanan: ilustrasi */}
        <div className="md:col-span-2 flex justify-center md:justify-end order-1 md:order-2">
          <Image
            src="/images/profile/bg-1.png"
            alt="Departemen Sosiologi"
            width={420}
            height={420}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* === Section: Daftar Keunggulan === */}
      <section className="w-full bg-secondary py-20 mt-20">
        <div className="max-w-[1300px] mx-auto gap-10 px-6 pb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Kenapa Harus Sosiologi <br />
            <span className="text-primary">UIN Bandung?</span>
          </h2>
        </div>
       
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {/* Keunggulan 1 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-blue-100">
              <HeartHandshake className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Memadukan Pendekatan Sosiologi Barat dan Timur
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prodi ini menggabungkan keilmuan sosiologi dengan pendekatan teori
                dari Barat dan Timur, khususnya Islam. Hal ini terlihat dari mata
                kuliah seperti <i>Sosiologi Timur Tengah</i>, yang membuktikan
                komitmen prodi dalam memadukan beragam perspektif sosiologis.
              </p>
            </div>
          </div>

          {/* Keunggulan 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-green-100">
              <Puzzle className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Desa Binaan</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Program Desa Binaan menjadi bukti nyata kontribusi prodi terhadap
                masyarakat. Dengan adanya 8 desa binaan di berbagai kabupaten di Jawa
                Barat, prodi ini aktif mengimplementasikan ilmu sosiologi dalam
                membantu memecahkan permasalahan di tingkat lokal.
              </p>
            </div>
          </div>

          {/* Keunggulan 3 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-yellow-100">
              <HeartHandshake className="w-6 h-6 text-yellow-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Spiritualitas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prodi Sosiologi juga memperhatikan aspek spiritualitas dengan
                mewajibkan mahasiswa menghafal dan memahami satu juz Al-Qur’an.
                Keberadaan Rumah Quran menunjukkan komitmen prodi dalam memfasilitasi
                kegiatan keagamaan mahasiswa.
              </p>
            </div>
          </div>

          {/* Keunggulan 4 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-orange-100">
              <Puzzle className="w-6 h-6 text-orange-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Moderasi Beragama
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dosen sosiologi terlibat sebagai ahli dan peneliti bidang moderasi
                beragama, bahkan memiliki sertifikat instruktur nasional. Mata kuliah{" "}
                <i>Masyarakat dan Moderasi Beragama</i> menjadi bagian penting dari
                kurikulum untuk mencetak agen perubahan yang toleran dan inklusif.
              </p>
            </div>
          </div>

          {/* Keunggulan 5 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-purple-100">
              <HeartHandshake className="w-6 h-6 text-purple-700" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Alumni</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Para alumni Sosiologi UIN Bandung telah berkecimpung di berbagai
                bidang — ASN, akademisi, peneliti, pemberdaya, dan analis sosial.
                Salah satu alumni ialah Agus Mauludin yang mendirikan lembaga riset{" "}
                <Link
                  href="https://cicresearch.id"
                  target="_blank"
                  className="text-primary hover:underline font-medium"
                >
                  CIC Lembaga Riset dan Konsultan Sosial
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-16 px-6">
        <h3 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Video Profil <span className="text-primary">Departemen Sosiologi</span>
        </h3>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/D-_nKqQC4_c"
            title="Video Profil Departemen Sosiologi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </section>
  );
};

export default Profile;
