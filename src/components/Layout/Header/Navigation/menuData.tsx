import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "#", 
    submenu: [
      { label: "Profil Departemen", href: "/profile" },
      { label: "Visi Misi", href: "/profile/visi" },
      { label: "Struktur Organisasi", href: "/profile/struktur" },
      { label: "Dosen", href: "/profile/dosen" },
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
  { label: "Tridharma", href: "#",
    submenu: [
      { label: "Publikasi Ilmiah", href: "/tridharma/publikasi" },
      { label: "Jurnal", href: "https://journal.uinsgd.ac.id/index.php/temali" },
      { label: "Pengabdian Masyarakat", href: "/tridharma/pkm" },
    ],
   },
  { label: "Berita", href: "/news" },
  { label: "Kontak", href: "/contact" },
];
