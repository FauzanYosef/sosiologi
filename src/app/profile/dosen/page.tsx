import React from "react";
import { Metadata } from "next";
import Link from "next/link";


import Header from "@/components/Profile/Header";
import Dosen from "@/components/Profile/Dosen"; 

export const metadata = {
  title: "Dosen - Sosiologi",
};

export default function DosenPage() {
  

  return (
    <main className="min-h-screen bg-gray-50 pt-[140px] pb-16">
      <div className="container mx-auto px-4">
        
        <Header />
        
      </div>
      <div>
        <Dosen />
      </div>
    </main>
  );
}
