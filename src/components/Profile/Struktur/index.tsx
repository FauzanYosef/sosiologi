"use client";

import React from "react";
import { CalendarDays, User } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";

const Struktur = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/profil", text: "Struktur Organisasi" },
  ];

  return (
    <section className="pt-10 pb-20">
      {/* === Header satu kolom (centered) === */}
      <div className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed space-y-8">
        <Breadcrumb links={breadcrumbLinks} />

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Struktur Organisasi <br />
          <span className="text-primary">Departemen Sosiologi</span>
        </h2>

        <div className="flex justify-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-yellow-500" />
            <span>29 Maret 2021, 00.23</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-yellow-500" />
            <span>Oleh : Admin</span>
          </div>
        </div>
      </div>

      {/* === Gambar Struktur Organisasi === */}
      <div className="max-w-5xl mx-auto mt-16 px-4">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-md border border-gray-200 mb-10 bg-white">
          <Image
            src="/images/profile/organisasi.png"
            alt="Struktur Organisasi Departemen Sosiologi"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* === Section deskripsi struktur organisasi === */}
        <div className="text-left] space-y-6 leading-relaxed text-gray-700">
          <p>
            Struktur utama di tingkat Fakultas terdiri dari:
          </p>

          <ul className="text-gray-800 text-lg space-y-2 list-disc list-inside">
            <li>Dekan dan Wakil Dekan</li>
            <li>Jurusan/Program Studi</li>
            <li>Laboratorium</li>
            <li>Tata Usaha</li>
            <li>Komite Penjaminan Mutu</li>
            <li>Gugus Penjaminan Mutu</li>
          </ul>

          <p>
            Untuk menunjang fungsi di atas, dibentuk pula beberapa unit yang berada di bawah FISIP, antara lain:
          </p>

          <ul className="text-gray-800 text-lg space-y-2 list-decimal list-inside">
            <li>
              <strong>Perpustakaan Fakultas</strong> — menyediakan layanan buku, skripsi, dan digital library untuk sivitas akademika FISIP UIN Sunan Gunung Djati Bandung.
            </li>
            <li>
              <strong>Pusat Kajian CASSR (Centre for Asian Social Science Research)</strong> — pusat kajian bidang ilmu-ilmu sosial di Asia yang fokus pada pengembangan penelitian dan kontribusi terhadap kebijakan publik, akademik, dan sosial.
            </li>
            <li>
              <strong>Lembaga Tahfidz</strong> — lembaga yang mengelola pelaksanaan dan pengujian hafalan mahasiswa sebagai salah satu syarat kelulusan.
            </li>
            <li>
              <strong>Lembaga Kajian Riset dan Pemberdayaan Sosial (LKRPS)</strong> — pusat kajian dan pemberdayaan masyarakat di bawah naungan Program Studi S1 Sosiologi.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Struktur;
