import React from "react";
import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/Profile/Header";
import Visi from "@/components/Profile/Visi"; 

export const metadata = {
  title: "Visi Misi - Sosiologi",
};

export default function VisiPage() {
  

  return (
    <main className="min-h-screen bg-gray-50 pt-[140px] pb-16">
      <div className="container mx-auto px-4">
        
        <Header />
        
      </div>
      <div>
        <Visi />
      </div>
    </main>
  );
}
