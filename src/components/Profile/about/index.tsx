"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  GraduationCap,
  Home,
  UserCheck,
  Briefcase,
  CalendarDays,
  User,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

const faqItems = [
  {
    q: "Pertama, Memadukan Pendekatan Sosiologi Barat dan Timur",
    a: "Prodi ini menggabungkan keilmuan sosiologi dengan pendekatan teori sosiologi dari Barat dan Timur, khususnya Islam. Hal ini terlihat dari keberadaan mata kuliah seperti Sosiologi Timur Tengah, yang membuktikan komitmen prodi dalam memadukan beragam perspektif sosiologis."
  },
  {
    q: "Kedua, Desa Binaan",
    a: "Program Desa Binaan menjadi salah satu bukti nyata dari kontribusi prodi sosiologi terhadap masyarakat. Dengan adanya 8 Desa Binaan di berbagai kabupaten di Jawa Barat, prodi ini aktif dalam mengimplementasikan ilmu sosiologi untuk membantu memecahkan berbagai permasalahan di tingkat lokal."
  },
  {
    q: "Ketiga, Spiritualitas",
    a: "Prodi Sosiologi juga memberikan perhatian terhadap aspek spiritualitas dengan mewajibkan mahasiswanya untuk menghafal dan memahami 1 juz Al-Qur’an. Selain itu, keberadaan Rumah Quran di lingkungan prodi menunjukkan komitmen untuk memfasilitasi kegiatan keagamaan bagi mahasiswa."
  },
  {
    q: "Keempat, Moderasi Beragama",
    a: "Prodi Sosiologi juga fokus pada pengembangan moderasi beragama. Para dosen sosiologi terlibat sebagai ahli dan peneliti dalam bidang ini, bahkan memiliki sertifikat sebagai instruktur moderasi beragama nasional. Mata kuliah Masyarakat dan Moderasi Beragama turut menjadi bagian dari kurikulum prodi, menunjukkan upaya prodi dalam mendidik mahasiswa untuk menjadi agen perubahan yang mempromosikan dialog dan toleransi antaragama. Dengan demikian, Prodi Sosiologi di UIN Bandung memberikan pengalaman belajar yang holistik dan relevan dengan tuntutan zaman."
  },
  {
    q: "Kelima, Alumni",
    a: "Para alumni Sosiologi UIN Bandung telah berkecimpung di berbagai lini masyarakat. Alumni Sosiologi ada yang aktif menjadi ASN di pemerintahan, akademisi, dosen, peneliti, pemberdaya, dan analis sosial. Salah satu alumni Sosiologi ialah <strong> Agus Mauludin</strong> yang berhasil mendirikan CIC Lembaga Riset dan Konsultan Sosial."
  },
];

const FAQSosiologi = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="pb-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
        Kenapa Harus Sosiologi UIN Bandung?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Prodi Sosiologi di UIN Bandung menonjolkan keunggulan-keunggulan yang 
        menjadikannya pilihan tepat bagi calon mahasiswa.
      </p>

      <div className="space-y-4">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="border rounded-2xl bg-white shadow-sm hover:shadow transition duration-200"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="text-lg font-[600] text-primary ">
                {item.q}
              </span>

              <span
                className={`text-lg font-normal transition-all duration-300 ${
                  openIndex === i ? "text-red-600 rotate-180" : "text-gray-900"
                }`}
              >
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-5 text-gray-700 leading-relaxed">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const ProfilYayasan = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/profil", text: "Profil Yayasan" },
  ];

  const stats = [
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      label: "Gelar Strata",
      value: "S.Sos. (S1)",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      label: "Gelar Pasca",
      value: "M.Sos. (S2)",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-primary" />,
      label: "Ruang Kuliah",
      value: "22 Unit Ruang Kuliah",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      label: "Mahasiswa",
      value: "250 Mahasiswa",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-primary" />,
      label: "Alumni",
      value: "500 Alumni",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-primary" />,
      label: "Dosen dan Tendik",
      value: "60 Pegawai",
    },
  ];

  return (
    <section className="pb-5 pt-5">

      {/* === Main Content Wrapper === */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-[0.25fr,0.75fr] gap-10 px-4">

        {/* === Sidebar Kiri === */}
        <div>
          <div className="bg-white shadow-md rounded-2xl p-8 space-y-10 border">
            {stats.map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-start">{item.icon}</div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-md font-bold">{item.value}</p>

                {i !== stats.length - 1 && (
                  <hr className="border-gray-200 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* === Konten Kanan === */}
        <div className="space-y-20 text-gray-700 leading-relaxed">

          {/* PROFIL */}
          <div className="pb-5">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Profile <br />
              <span className="text-primary">Departemen Sosiologi</span>
            </h2>

            <div className="flex text-left gap-6 text-gray-600 text-sm pt-5 pb-10">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-yellow-500" />
                <span>29 March 2021, 00.23</span>
              </div>

              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-yellow-500" />
                <span>Oleh : Admin</span>
              </div>
            </div>
            <p> Prodi Sosiologi dibuka pada tahun 2000. Pada waktu itu masih bernama Prodi Antropologi Sosiologi Agama (ASA) di Fakultas Ushuluddin. Pada tahun 2001 dikeluarkan surat keputusan (SK) pendiriannya dari Direktur Jenderal Pembinaan Kelembagaan Agama Islam Departemen Agama RI No E/281/2001 tanggal 29 November 2001 dengan nama Prodi Sosiologi Antropologi Agama. Prodi ini merupakan salah satu Prodi wider mandate di lingkungan IAIN Sunan Gunung Djati Bandung. Surat Keputusan tersebut dikeluarkan atas dasar rekomendasi dari Direktur Jenderal Pendidikan Tinggi Departemen Pendidikan Nasional No 2981/D/T/2001 tanggal 18 September 2001. </p> 
            <p className="mt-4"> Pada tahun 2006, dikeluarkan surat keputusan (SK) pendirian Prodi Sosiologi dan prodi-prodi umum lainnya di lingkungan Universitas Islam Negeri Sunan Gunung Djati Bandung Nomor DJ.II/25/2006 yang dikeluarkan oleh Direktur Jenderal Kelembagaan Agama Islam Depag RI. SK tersebut merupakan kelanjutan dari SK sebelumnya. Meskipun dalam SK baru tersebut tidak dicantumkan konsentrasinya, penyelenggaraan perkuliahan di Prodi ini masih mengacu pada kurikulum konsentrasi Sosiologi Agama. </p > 
            <p className="mt-4"> Prodi ini telah terakreditasi oleh Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) Departemen Pendidikan Nasional dengan nilai B (Baik) berdasarkan SK No 025/BAN-PT/Ak-X/2007. Pada Agustus 2008, prodi ini mulai melaksanakan sistem pelaporan evaluasi perguruan tinggi ESPBED ke Pendidikan Tinggi Departemen Pendidikan Nasional secara berkala setiap semester. </p>
          </div>

          {/* === FAQ ACCORDION (SUDAH MASUK) === */}
          <FAQSosiologi />

        </div>
      </div>
    </section>
  );
};

export default ProfilDepartemen;
