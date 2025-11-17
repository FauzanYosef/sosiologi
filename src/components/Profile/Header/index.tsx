"use client";

import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { usePathname } from "next/navigation";

const Profile = () => {
  const pathname = usePathname();

  // 🔹 Pisahkan path menjadi segmen-segmen
  const segments = pathname.split("/").filter((seg) => seg !== "");

  // 🔹 Mapping custom title untuk setiap route
  const titleMap: Record<string, string> = {
    "profile": "Profile Departemen Sosiologi",
    "profile/visi": "Visi & Misi",
    "profile/struktur": "Struktur Organisasi",
    "profile/dosen": "Dosen & Tenaga Kependidikan",
    "profile/alumni": "Alumni",
    "berita": "Berita",
    "berita/detail": "Detail Berita",
  };

  // 🔹 Bentuk breadcrumb otomatis
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    ...segments.map((seg, idx) => ({
      href: "/" + segments.slice(0, idx + 1).join("/"),
      text: seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, " "),
    })),
  ];

  // 🔹 Ambil title custom sesuai route, atau fallback dari segmen terakhir
  const pageKey = segments.join("/");
  const pageTitle =
    titleMap[pageKey] ||
    (segments.length > 0
      ? segments[segments.length - 1]
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase())
      : "Departemen Sosiologi");

  return (
    <section className="mx-auto text-gray-700 leading-relaxed space-y-10 pb-1 pt-10">
      {/* Header Image */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/images/profile/uin.jpg"
          alt="Gedung Departemen Sosiologi"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay Title & Breadcrumb */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-white text-4xl font-bold tracking-wide">
            {pageTitle}
          </h2>

          <div>
            <Breadcrumb links={breadcrumbLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
