
import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";


export const metadata = {
  title: "Profil - Departemen Sosiologi",
};

export default function ProfilPage() {
  return (
    <main className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-lg">
        <h1 className="text-4xl font-semibold text-midnight_text mb-6">
          Profil Departemen Sosiologi
        </h1>
        <p className="text-gray-700 mb-8">
          Departemen Sosiologi merupakan bagian dari Fakultas Ilmu Sosial dan
          Ilmu Politik (FISIP) UIN Sunan Gunung Djati Bandung, dengan fokus
          pada pengembangan keilmuan dan penelitian sosial di berbagai bidang.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/profil/sejarah"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition"
          >
            Lihat Sejarah
          </Link>
          <Link
            href="/profil/visi-misi"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition"
          >
            Visi & Misi
          </Link>
          <Link
            href="/profil/struktur"
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition"
          >
            Struktur Organisasi
          </Link>
        </div>
      </div>
    </main>
  );
}
