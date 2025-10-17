export const TruestedAbout: { imgSrc: string }[] = [
  {
    imgSrc: "/images/companies/unisel.png"
  },
  {
    imgSrc: "/images/companies/upm.png"
  },
  {
    imgSrc: "/images/companies/iainkudus.png"
  },
  {
    imgSrc: "/images/companies/kab-sumedang.png"
  },
  {
    imgSrc: "/images/companies/umroh.png"
  },
  {
    imgSrc: "/images/companies/dinsos.png"
  },
  {
    imgSrc: "/images/companies/malaya.png"
  }
]

export const NewsData: {
  heading: string;
  imgSrc: string;
  name: string;
  students: number;
  dated: string;
  price: number;
  rating: number; }[] = [
    {
      heading: 'Sosiologi Bangga',
      name: "Azri Syahrul Fazri, Mahasiswa Sosiologi Angkatan 2021, Raih Juara 1 dalam Lomba Esai Nasional HMKM Competition 2025'",
      imgSrc: '/images/News/courseone.png',
      students: 150,
      dated: "2025-01-12",
      price: 20,
      rating: 4.4,
    },
    {
      heading: 'Kerjasama Pengembangan',
      name: "Kerjasama Pengembangan Kurikulum antara Prodi Sosiologi UIN Sunan Gunung Djati dan UIN Sunan Kalijaga",
      imgSrc: '/images/News/coursetwo.png',
      students: 130,
      dated: "2025-01-12",
      price: 20,
      rating: 4.5,
    },
    {
      heading: 'Berita Sosiologi',
      name: "Prodi Sosiologi UIN Bandung Gelar FGD Bersama DPMD Jabar, Bahas Penguatan Kurikulum Berdampak dan Pemberdayaan Masyarakat",
      imgSrc: '/images/News/coursethree.png',
      students: 120,
      dated: "2025-01-12",
      price: 20,
      rating: 5,
    },
  ]

export const DekanData: { 
  profession: string; 
  name: string; 
  imgSrc: string }[] = [
  {
    profession: 'Dekan',
    name: 'Prof. Dr. H. Ahmad Ali Nurdin, MA., Ph.D.',
    imgSrc: '/images/Dekan/1.png',
  },
  {
    profession: 'Wakil Dekan I',
    name: 'Prof. Dr. Adon Nasurullah Jamaludin, M.Ag',
    imgSrc: '/images/Dekan/2.png',
  },
  {
    profession: 'Wakil Dekan II',
    name: 'Dr. H. Faizal Pikri, M.Ag',
    imgSrc: '/images/Dekan/3.png',
  },
  {
    profession: 'Wakil Dekan III',
    name: 'Dr. H. Moh. Dulkiah, M.Si.',
    imgSrc: '/images/Dekan/4.png',
  },
]

export const LecturerData: { 
  nip: string; 
  kajian: string; 
  imgSrc: string; 
  name: string; }[] = [
  {
    name: "Prof. Dr. Adon Nasrullah Jamaluddin, M.Ag., CSR.",
    nip: "197203271997031001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  {
    name: "Prof. Dr. H. Encup Supriatna, M.Si. ",
    nip: "196304251990031001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  {
    name: "Dr. Dede Syarif, S.Sos., M.Ag., CISE.",
    nip: "197601142007101000",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  {
    name: "Dr. Endah Ratna Sonya., S.Sos., M.Si., CISE., CIIQA.",
    nip: "197702102007102002",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },{
    name: "Dr. Nuraini, S.KPm., M.Si.",
    nip: "199410202022032001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  
]

export const InformationData: { 
  nip: string; 
  kajian: string; 
  imgSrc: string; 
  name: string; }[] = [
  {
    name: "Prof. Dr. Adon Nasrullah Jamaluddin, M.Ag., CSR.",
    nip: "197203271997031001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  {
    name: "Prof. Dr. H. Encup Supriatna, M.Si. ",
    nip: "196304251990031001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  {
    name: "Dr. Dede Syarif, S.Sos., M.Ag., CISE.",
    nip: "197601142007101000",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  {
    name: "Dr. Endah Ratna Sonya., S.Sos., M.Si., CISE., CIIQA.",
    nip: "197702102007102002",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },{
    name: "Dr. Nuraini, S.KPm., M.Si.",
    nip: "199410202022032001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Lecturer/user.svg',
  },
  
]

type TextSlide = {
  type: "text";
  title1: string;
  title2: string;
  subtitle: string;
  image: string;
  name: string;
  position: string;
  alt?: string;
};

type ImageSlide = {
  type: "image";
  image: string;
  alt: string;
};

export type HeroSlide = TextSlide | ImageSlide;
export const heroSlides: HeroSlide[] = [
  {
    type: "text",
    title1: "Departemen Sosiologi",
    title2: "Fakultas Ilmu Sosial dan Ilmu Politik",
    subtitle: "Universitas Islam Negeri Sunan Gunung Djati Bandung.",
    image: "images/banner/talent.png",
    name: "Prof. Dr. H. Ahmad Ali Nurdin, MA., Ph.D.",
    position: "Dekan Fakultas Ilmu Sosial dan Ilmu Politik",
    alt: "Foto Prof. Dr. H. Ahmad Ali Nurdin",
  },
  {
    type: "text",
    title1: "Program Studi S1 Sosiologi",
    title2: "UIN Sunan Gunung Djati Bandung",
    subtitle: "Berkontribusi pada keilmuan dan kemanusiaan.",
    image: "images/banner/sociology.png",
    name: "Dr. Siti Nurjanah, M.Si",
    position: "Ketua Program Studi Sosiologi",
    alt: "Foto Dr. Siti Nurjanah",
  },
  {
    type: "image",
    image: "images/banner/exbanner.png",
    alt: "Program Studi Sosiologi",
  },
];

export const SocialMediaData: {
  imgSrc: string
  link?: string
}[] = [
  {
    imgSrc: "/images/medsos/ig-01.png",
    link: "https://www.instagram.com/p/DL1EuhrSqj7/?hl=en&img_index=1",
  },
  {
    imgSrc: "/images/medsos/ig-02.png",
    link: "https://www.instagram.com/p/DMUBJqZSsoG/?hl=en",
  },
  {
    imgSrc: "/images/medsos/ig-03.png",
    link: "https://www.instagram.com/p/DN9U5KykvpO/?hl=en&img_index=1",
  },
  {
    imgSrc: "/images/medsos/ig-02.png",
    link: "https://www.instagram.com/p/DMUBJqZSsoG/?hl=en",
  },
  
]

