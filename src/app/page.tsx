import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/About";
import News from "@/components/Home/News";
import Dekan from "@/components/Home/Dekan";
import Lecturer from "@/components/Home/Lecturers";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import Information from "@/components/Home/Information";
import Media from "@/components/Home/Media";

export const metadata: Metadata = {
  title: "Sosiologi",
  icons: {
    icon: "/favicon.ico", // atau .png/.svg
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <News />
      <Dekan />
      <Lecturer />
      {/* <Information /> */}
      <Companies />
      <Media/>
      <Newsletter />
    </main>
  );
}