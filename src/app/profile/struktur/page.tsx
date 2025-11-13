import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Profile/Header";
import Struktur from "@/components/Profile/Struktur"; 

export const metadata = {
  title: "Struktur Organisasi - Sosiologi",
};

export default function StrukturPage() {
  

  return (
    <main className="min-h-screen bg-gray-50 pt-[140px] pb-16">
      <div className="container mx-auto px-4">
        
        <Header />
        
      </div>
      <div>
        <Struktur />
      </div>
    </main>
  );
}
