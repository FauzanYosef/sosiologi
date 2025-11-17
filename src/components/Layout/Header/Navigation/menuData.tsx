import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "#", 
    submenu: [
      { label: "Profil Departemen", href: "/profile" },
      { label: "Visi Misi", href: "/profile/visi" },
      { label: "Struktur Organisasi", href: "/profile/struktur" },
      { label: "Dosen", href: "/profile/dosen" },
      { label: "Staff", href: "/profile/staff" },
    ],
  },
  { label: "Program Studi", href: "#",
    submenu: [
      { label: "Program Sarjana", href: "https://sosiologi.uinsgd.ac.id/" },
      { label: "Program Magister", href: "/prodi/magister" },
      // { label: "Program Doktoral", href: "/profil/struktur" },
      { label: "Akreditasi", href: "/prodi/akreditasi" },
    ],
   },
  { label: "Riset & Publikasi", href: "#",
    submenu: [
      { label: "Jurnal", href: "/profil/sejarah" },
      { label: "Publikasi Dosen", href: "/profil/visi-misi" },
    ],
   },
  { label: "Berita", href: "/#service" },
  { label: "Kontak", href: "/#pricing" },
];
