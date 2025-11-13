import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Profile/Header";
import About from "@/components/Profile/About"; 

export const metadata = {
  title: "Profil - Sosiologi",
};

export default function ProfilPage() {
  

  return (
    <main className="min-h-screen bg-gray-50 pt-[140px] pb-16">
      <div className="container mx-auto px-4">
        
        <Header />
        
      </div>
      <div>
        <About />
      </div>
    </main>
  );
}
