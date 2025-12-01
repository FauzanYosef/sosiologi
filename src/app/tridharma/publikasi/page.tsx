import React from "react";
import { Metadata } from "next";
import Link from "next/link";


import Header from "@/components/Profile/Header";
import Publikasi from "@/components/Tridharma/Publikasi"; 

export const metadata = {
  title: "Publikasi - Sosiologi",
};

export default function PublikasiPage() {
  

  return (
    <main className="min-h-screen bg-gray-50 pt-[140px] pb-16">
      <div className="container mx-auto px-4">
        
        <Header />
        
      </div>
      <div>
        <Publikasi />
      </div>
    </main>
  );
}
