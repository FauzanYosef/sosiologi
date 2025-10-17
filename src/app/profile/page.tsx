
import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Profil - Departemen Sosiologi",
};

export default function ProfilPage() {
    const breadcrumbLinks = [
      { href: "/", text: "Home" },
      { href: "/profil", text: "Profil" },
    ];
  
    return (
        <main className="min-h-screen bg-gray-50 pt-[140px] pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb links={breadcrumbLinks} />
      
          <h1 className="text-3xl font-bold text-midnight_text mb-4">
            Profil Departemen
          </h1>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Halaman ini berisi informasi umum tentang Departemen Sosiologi, termasuk visi, misi, dan sejarah singkat pengembangan departemen.
          </p>
        </div>
      </main>
      
    );
  }