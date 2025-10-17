import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "/#", 
    submenu: [
      { label: "Profil Departemen", href: "/profile" },
      { label: "Struktur Organisasi", href: "/profile/visi-misi" },
      { label: "Dosen", href: "/profil/struktur" },
      { label: "Staff", href: "/profil/struktur" },
    ],
  },
  { label: "Program Studi", href: "/#",
    submenu: [
      { label: "Program Sarjana", href: "https://sosiologi.uinsgd.ac.id/" },
      { label: "Program Magister", href: "/profil/visi-misi" },
      { label: "Program Doktoral", href: "/profil/struktur" },
      { label: "Akreditasi", href: "/profil/struktur" },
    ],
   },
  { label: "Riset & Publikasi", href: "/#",
    submenu: [
      { label: "Jurnal", href: "/profil/sejarah" },
      { label: "Publikasi Dosen", href: "/profil/visi-misi" },
    ],
   },
  { label: "Berita", href: "/#service" },
  { label: "Kontak", href: "/#pricing" },
];
