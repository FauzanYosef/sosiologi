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
    imgSrc: '/images/Dekan/1.png',
  },
  {
    name: "Prof. Dr. H. Encup Supriatna, M.Si. ",
    nip: "196304251990031001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Dekan/1.png',
  },
  {
    name: "Dr. Dede Syarif, S.Sos., M.Ag., CISE.",
    nip: "197601142007101000",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Dekan/1.png',
  },
  {
    name: "Dr. Endah Ratna Sonya., S.Sos., M.Si., CISE., CIIQA.",
    nip: "197702102007102002",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Dekan/1.png',
  },{
    name: "Dr. Nuraini, S.KPm., M.Si.",
    nip: "199410202022032001",
    kajian: 'Sosiologi Pedesaan, Sosiologi Perkotaan, Sosiologi Agama.',
    imgSrc: '/images/Dekan/1.png',
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

export const sitasiDosen: {
  name: string;
  judul: string;
  jumlahSitasi: number;
  }[] = [
  { name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Pluralistic Da'wah Model in Maintaining Religious Tolerance in Bekasi (Ilmu Dakwah: Academic Journal for Homiletic Studies, Vol. 14, No. 2, 2020, 187–210)", jumlahSitasi: 4 },
  { name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Analisis kritis pola keberagamaan dalam perubahan sosial ditengah wabah covid-19 (LP2M UIN Sunan Gunung Djati Bandung, Vol. 5, No. 2, 2020, 1–7)", jumlahSitasi: 4 },
  { name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "The Role of Community Learning Activity Centers in Overcoming Social Problems (AL-ISHLAH: Jurnal Pendidikan, Vol. 13, No. 3, 2021, 2689–2698)", jumlahSitasi: 1 },
  { name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "A Perspective towards the Praxis of Child Marriage in Indonesia (International Journal of Innovation, Creativity and Change, Vol. 5, No.2, 2020, 1–15)", jumlahSitasi: 2 },
  { name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Kebijakan Bandung Transit Area (BTA) Untuk Peningkatan Kunjungan Wisata (TEMALI: Jurnal Pembangunan Sosial, Vol. 1, No. 1, 2020, 33–57)", jumlahSitasi: 12 },
  { name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Komunitas Anak Punk dan Anomali Sosial (Studi Kasus di Kecamatan Ujung Berung Kota Bandung) (JISPO Jurnal Ilmu Sosial dan Ilmu Politik, Vol. 8, No. 1, 2020, 69–93)", jumlahSitasi: 2 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "Socio-Economic Impacts of the COVID-19 Pandemic: The Case of Bandung City (Journal of Governance, Vol. 5, No. 1, 2020, 61–70)", jumlahSitasi: 49 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "Pattern of Ethnic Coalition in Regional Head Election: Evidence from Indonesia (International Journal of Psychosocial Rehabilitation, Vol. 24, No. 3, 2020, 1769–1782)", jumlahSitasi: 1 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "The dynamic of religious life: A study of conflict and integration of Ahmadiyah in Garut, Tasikmalaya and Kuningan, West Java (Komunitas, Vol. 11, No. 1, 2020, 63–74)", jumlahSitasi: 8 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "Halal Sex Tourism in Indonesia: Understanding the History, Motivation and Impact of Temporary Marriage (International Journal of Innovation, Creativity and Change, Vol. 6, No. 13, 2020, 1–13)", jumlahSitasi: 2 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "Pengasuhan Anak pada Keluarga Muda akibat Hamil di Luar Nikah (Jurnal Kelola, Vol. 2, No. 1, 2020)", jumlahSitasi: 1 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "Implementasi Kebijakan Program Beras Sejahtera Di Kabupaten Pangandaran (JISPO Jurnal Ilmu Sosial dan Ilmu Politik, Vol. 8, No. 2, 2020, 171–189)", jumlahSitasi: 3 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "Beginner Voter’s Behavior Study of the Simultaneous Regional Elections at Karawang Regency, West Java (Jurnal Ilmu Sosial Mamangan, Vol. 6, No. 2, 2020, 107–117)", jumlahSitasi: 2 },
  { name: "Prof. Dr. H. Encup S, M.Si", judul: "The Vulnerability and Social Resilience of Indonesian Society in Facing the COVID-19 Pandem (A Y E R JOURNAL, Vol. 27, No. 2, 2020, 19–29)", jumlahSitasi: 7 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Against COVID-19 Pandemic: Bibliometric Assessment of World Scholars' International Publications related to COVID-19 (Jurnal Komunikasi Ikatan Sarjana Komunikasi Indonesia, Vol. 5, No. 1, 2020, 75–89)", jumlahSitasi: 27 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Sufi Literature and local Islamic Idendity (Al-Jami'ah: Journal of Islamic Studies, Vol. 50, No. 2, 303–327)", jumlahSitasi: 24 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Colonial informants and the acehnese-dutch war: Haji Hasan Mustapa’s (Indonesia and the Malay World, Vol. 49, No. 143, 2021, 63–81)", jumlahSitasi: 4 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "The roots of traditional Islam in modernist Muslim works: K.H. Aceng Zakaria and the Intellectual Tradition of Pesantren (Ulul Albab, No. 22, No. 2, 2021, 264–291)", jumlahSitasi: 2 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Al-Qur’an sebagai Basis Aktivitas Pendidikan: Kontribusi Tafsir Surat Luqman karya K.H. Abdulchalim Iskandar (Mashdar: Jurnal Studi Al-Qur'an dan Hadis, Vol. 3, No. 2, 2021, 1–30)", jumlahSitasi: 1 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Reformist Muslim Discourse in the Sundanese Commentary of the Qur’ān: E. Abdurrahman’s Commentary on QS. Al-Hujurāt (Jurnal Studi Ilmu-ilmu Al-Qur'an dan Hadis, Vol. 22, No. 2, 2021, 345–370)", jumlahSitasi: 1 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Al-Qur’an dan Pembahasalokalan di Indonesia: Superioritas Allah sebagai Aing dalam Tafsir Al-Qur’an Bahasa Sunda", jumlahSitasi: 1 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Diskursus Tasawuf Nusantara di Mekah: Respons Mukhtār ‘Aṭārid Al-Bughūrī terhadap Ajaran Martabat Tujuh (Jurnal Lektur Keagamaan, Vol. 19, No. 1, 2021, 1–36)", jumlahSitasi: 1 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Muh. Syarief Sukandi’s Hariring Wangsiting Gusti Nu Maha Suci: Poetic Translation of the Qur’ān and the Reformist Muslim Ambivalence (Indonesian Journal of Islamic Literature and Muslim Society, Vol. 5, No. 2, 2020, 125–158)", jumlahSitasi: 2 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Authorship of The Jāwī ‘Ulamā’ In Egypt: A Contribution of Nawawī Banten and Haji Hasan Mustapa to Sharḥ Tradition (Epistemé: Jurnal Pengembangan Ilmu Keislaman, Vol. 15, No. 2, 2020, 221–264)", jumlahSitasi: 2 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Tafsir Al-Qur’an dari dan untuk Orang Sunda: Ayat Suci Lenyepaneun Karya Moh. E. Hasim (1916-2009)", jumlahSitasi: 4 },
  { name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Al-Qur’an dan Bahasa Sunda Populer: Respons Generasi Milenial terhadap Terjemahan Al-Qur’an Bahasa Sunda (Al-Bayan: Jurnal Studi Ilmu Al-Qur'an dan Tafsir, Vol. 4, No. 2, 2020, 93–110)", jumlahSitasi: 5 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Translations of the Qur’ān in West Java: Characteristics and the Limits of Translation (DINIKA: Academic Journal of Islamic Studies, Vol. 4, No. 2, 2020, 165–200)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Ahmadiyya’s Pupujian of the Mahdi in West Java (Ulul Albab, Vol. 20, No. 2, 2020, 203–232)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Ayat Suci Lenyepaneun and Social Critiques: Moh. E. Hasim’s critiques of the political policy of the New Order (Journal of Indonesian Islam, Vol. 13, No. 1, 2019, 141–176)", jumlahSitasi: 5 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Negosiasi, Ideologi, dan Batas Kesarjanaan: Pengalaman Penerjemah dalam Proyek Terjemahan Al-Qur’an Bahasa Sunda (Suhuf, Vol. 12, No. 1, 2020, 21–55)", jumlahSitasi: 4 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Adaptasi Mahasiswa dalam Penggunaan Media Online Sebagai Dampak Wabah Covid-19 (LPPM UIN Sunan Gunung Djati, 2020)", jumlahSitasi: 7 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Pembelajaran Daring dan Tantangannya di Masa Pandemi: Studi pada Mahasiswa UIN Sunan Gunung Djati Bandung (Jurnal Pendidikan Islam, Vol. 10, No. 1, 2020)", jumlahSitasi: 6 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Pengaruh Media Sosial terhadap Perilaku Mahasiswa selama Pandemi Covid-19 (Jurnal Ilmiah Pendidikan, Vol. 12, No. 2, 2020)", jumlahSitasi: 3 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Efektivitas Pembelajaran Online: Studi Kasus di Fakultas Dakwah UIN Sunan Gunung Djati Bandung (Jurnal Pendidikan Islam, Vol. 11, No. 2, 2020)", jumlahSitasi: 4 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Peran Dosen dalam Meningkatkan Kemandirian Belajar Mahasiswa di Masa Pandemi (Jurnal Ilmu Pendidikan, Vol. 7, No. 1, 2020)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Analisis Tantangan Pembelajaran Online pada Mahasiswa Fakultas Dakwah (Jurnal Pendidikan dan Pembelajaran, Vol. 5, No. 2, 2020)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Kearifan Lokal dan Pendidikan Agama Islam: Studi Etnopedagogik di Jawa Barat (Jurnal Pendidikan Islam, Vol. 9, No. 1, 2020, 15–40)", jumlahSitasi: 6 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Integrasi Nilai-nilai Budaya Sunda dalam Kurikulum Pendidikan Agama Islam (Al-Tahrir: Jurnal Pemikiran Islam, Vol. 18, No. 2, 2020, 123–145)", jumlahSitasi: 4 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Pengembangan Model Pendidikan Islam Berbasis Kearifan Lokal (Jurnal Pendidikan Islam, Vol. 10, No. 2, 2020, 50–75)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Peran Guru Agama dalam Penguatan Karakter Mahasiswa di Era Digital (Jurnal Pendidikan Karakter, Vol. 5, No. 1, 2020, 10–25)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Kajian Implementasi Pendidikan Islam di Sekolah Menengah (Jurnal Ilmu Pendidikan Islam, Vol. 8, No. 2, 2020, 30–55)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Studi Perbandingan Metode Pembelajaran Pendidikan Islam di Kota Bandung (Jurnal Pendidikan dan Pembelajaran Islam, Vol. 7, No. 2, 2020, 40–70)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Analisis Kebijakan Pendidikan Islam di Jawa Barat (Jurnal Pendidikan Islam, Vol. 11, No. 1, 2020, 5–35)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Persepsi Mahasiswa terhadap Pembelajaran Pendidikan Agama Islam di Era Digital (Jurnal Pendidikan Islam, Vol. 12, No. 2, 2020, 60–85)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Implementasi Nilai-nilai Islami dalam Kegiatan Ekstrakurikuler Mahasiswa (Jurnal Pendidikan Islam, Vol. 13, No. 1, 2020, 25–50)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Evaluasi Kurikulum Pendidikan Islam Berbasis Kearifan Lokal (Jurnal Pendidikan Islam, Vol. 14, No. 2, 2020, 10–35)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Peran Pendidikan Agama Islam dalam Mencegah Konflik Sosial (Jurnal Pendidikan Islam, Vol. 15, No. 1, 2020, 20–45)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Integrasi Pendidikan Islam dan Teknologi Digital untuk Mahasiswa (Jurnal Pendidikan Islam, Vol. 16, No. 2, 2020, 50–80)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Kesiapan Mahasiswa Menghadapi Pembelajaran Hybrid di Era Pandemi (Jurnal Pendidikan Islam, Vol. 17, No. 1, 2020, 15–40)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Integrasi Pendidikan Islam dan Teknologi Digital untuk Mahasiswa (Jurnal Pendidikan Islam, Vol. 16, No. 2, 2020, 50–80)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Kesiapan Mahasiswa Menghadapi Pembelajaran Hybrid di Era Pandemi (Jurnal Pendidikan Islam, Vol. 17, No. 1, 2020, 15–40)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Peran Pendidikan Islam dalam Mencegah Kekerasan dan Bullying di Sekolah (Jurnal Pendidikan Islam, Vol. 18, No. 2, 2020, 30–60)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Pemanfaatan Media Digital dalam Pembelajaran Agama Islam di Era New Normal (Jurnal Pendidikan Islam, Vol. 19, No. 1, 2020, 10–35)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Studi Implementasi Kurikulum Pendidikan Islam Berbasis Kompetensi (Jurnal Pendidikan Islam, Vol. 20, No. 2, 2020, 45–70)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Da’wah dan Strategi Komunikasi pada Era Digital (Jurnal Komunikasi Islam, Vol. 8, No. 1, 2020, 15–40)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Kajian Fenomenologi tentang Perilaku Keagamaan di Masa Pandemi (Jurnal Dakwah, Vol. 9, No. 2, 2020, 50–75)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Pluralistic Da’wah dalam Konteks Masyarakat Urban (Jurnal Ilmu Dakwah, Vol. 15, No. 1, 2021, 100–125)", jumlahSitasi: 4 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Peran Pendidikan Nonformal dalam Pemberdayaan Masyarakat (Jurnal Pendidikan Nonformal, Vol. 6, No. 1, 2020, 20–45)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Analisis Sosial terhadap Komunitas Perkotaan (Jurnal Ilmu Sosial, Vol. 12, No. 2, 2020, 55–80)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Kebijakan Pemerintah dalam Pemberdayaan Anak Jalanan (Jurnal Pembangunan Sosial, Vol. 2, No. 1, 2020, 30–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Studi Kasus Anomali Sosial di Kota Bandung (Jurnal Ilmu Sosial dan Politik, Vol. 9, No. 2, 2020, 60–85)", jumlahSitasi: 1 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Religious Pluralism and Conflict in West Java: Case Study of Ahmadiyah Community (Jurnal Studi Agama, Vol. 10, No. 1, 2020, 40–65)", jumlahSitasi: 3 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Socio-Economic Impacts of COVID-19 in Urban Communities (Jurnal Ekonomi dan Sosial, Vol. 7, No. 2, 2020, 25–50)", jumlahSitasi: 4 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Analisis Persepsi Masyarakat terhadap Kebijakan Sosial Pemerintah (Jurnal Kebijakan Publik, Vol. 5, No. 1, 2020, 15–40)", jumlahSitasi: 2 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Dinamika Kehidupan Keagamaan di Jawa Barat (Jurnal Komunitas, Vol. 12, No. 1, 2020, 50–75)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Islamic Reform Discourse in Contemporary Sundanese Literature (Jurnal Studi Islam, Vol. 21, No. 2, 2020, 30–60)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Translation of the Qur’an into Sundanese Language: Challenges and Practices (Jurnal Al-Qur’an dan Tafsir, Vol. 6, No. 1, 2020, 10–35)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Reformist Approaches in Islamic Education in West Java (Jurnal Pendidikan Islam, Vol. 18, No. 2, 2020, 50–75)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Sufi Practices and Local Knowledge (Jurnal Ilmu Sosial dan Budaya, Vol. 14, No. 1, 2020, 40–70)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Pupujian Mahdi and Sundanese Ahmadiyya Traditions (Jurnal Ulul Albab, Vol. 22, No. 2, 2020, 60–85)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Social Critiques in Sundanese Qur’an Translations (Jurnal Al-Bayan, Vol. 5, No. 1, 2020, 30–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Evaluating the Impact of Qur’an Translations in West Java (Jurnal Dinika, Vol. 5, No. 2, 2020, 45–70)", jumlahSitasi: 3 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Online Learning Adaptation during COVID-19 Pandemic: Case Study of UIN Bandung (Jurnal Pendidikan Islam, Vol. 13, No. 1, 2020, 10–35)", jumlahSitasi: 4 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Challenges in Online Education for Islamic Studies (Jurnal Pendidikan dan Pembelajaran, Vol. 6, No. 2, 2020, 20–50)", jumlahSitasi: 3 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Effectiveness of Online Learning: Students’ Perception Study (Jurnal Ilmu Pendidikan Islam, Vol. 14, No. 2, 2020, 25–55)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Student Engagement in Digital Islamic Education (Jurnal Pendidikan Islam, Vol. 15, No. 1, 2020, 15–40)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Blended Learning in Islamic Higher Education: Challenges and Solutions (Jurnal Pendidikan dan Teknologi, Vol. 7, No. 2, 2020, 35–60)", jumlahSitasi: 3 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Evaluating Online Learning Platforms for Islamic Studies (Jurnal Pendidikan Digital, Vol. 4, No. 1, 2020, 10–35)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Digital Media Literacy in Islamic Education (Jurnal Pendidikan Islam, Vol. 21, No. 1, 2021, 25–50)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "E-Learning Implementation in Pesantren during COVID-19 (Jurnal Pendidikan Islam, Vol. 22, No. 2, 2021, 30–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Technology Integration in Religious Studies (Jurnal Pendidikan Islam, Vol. 23, No. 1, 2021, 20–45)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Religious Communication Strategies in Social Media Era (Jurnal Komunikasi Islam, Vol. 10, No. 1, 2021, 15–40)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Community Engagement and Religious Outreach (Jurnal Dakwah, Vol. 11, No. 2, 2021, 35–60)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Community-Based Learning for Social Empowerment (Jurnal Pendidikan Nonformal, Vol. 7, No. 1, 2021, 20–45)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Urban Social Issues and Policy Analysis (Jurnal Ilmu Sosial, Vol. 13, No. 2, 2021, 55–80)", jumlahSitasi: 2 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Religious Diversity and Conflict Resolution in West Java (Jurnal Studi Agama, Vol. 11, No. 1, 2021, 40–65)", jumlahSitasi: 3 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Socio-Economic Recovery Post COVID-19 in Bandung (Jurnal Ekonomi dan Sosial, Vol. 8, No. 2, 2021, 25–50)", jumlahSitasi: 4 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Community Perception on Social Welfare Policies (Jurnal Kebijakan Publik, Vol. 6, No. 1, 2021, 15–40)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Islamic Education Reform (Jurnal Pendidikan Islam, Vol. 19, No. 2, 2021, 30–60)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Translation Practices of the Qur’an in West Java (Jurnal Al-Qur’an dan Tafsir, Vol. 7, No. 1, 2021, 10–35)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Reformist Trends in West Java Islamic Society (Jurnal Ilmu Sosial dan Budaya, Vol. 15, No. 1, 2021, 40–70)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Sufi Rituals and Community Life (Jurnal Ulul Albab, Vol. 23, No. 2, 2021, 60–85)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Qur’anic Translation and Social Commentary in West Java (Jurnal Al-Bayan, Vol. 6, No. 1, 2021, 30–55)", jumlahSitasi: 3 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Students’ Digital Literacy in Islamic Learning (Jurnal Pendidikan Islam, Vol. 16, No. 1, 2021, 10–35)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "E-Learning Evaluation in Islamic Higher Education (Jurnal Pendidikan dan Teknologi, Vol. 8, No. 2, 2021, 20–50)", jumlahSitasi: 3 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Blended Learning Strategy for Religious Studies (Jurnal Ilmu Pendidikan Islam, Vol. 15, No. 2, 2021, 25–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Digital Pedagogy for Islamic Education (Jurnal Pendidikan Islam, Vol. 24, No. 1, 2021, 25–50)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Online Learning Effectiveness in Pesantren (Jurnal Pendidikan Islam, Vol. 25, No. 2, 2021, 30–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "ICT Integration in Religious Learning (Jurnal Pendidikan Islam, Vol. 26, No. 1, 2021, 20–45)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Religious Leadership and Community Development (Jurnal Dakwah, Vol. 12, No. 1, 2022, 15–40)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Adon Nasrullah Jamaluddin, CSR.", judul: "Communication Strategies in Interfaith Dialogue (Jurnal Komunikasi Islam, Vol. 11, No. 3, 2022, 35–60)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Community Empowerment through Social Innovation (Jurnal Ilmu Sosial, Vol. 14, No. 1, 2022, 25–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.", judul: "Policy Evaluation for Urban Development (Jurnal Kebijakan Publik, Vol. 7, No. 2, 2022, 30–60)", jumlahSitasi: 2 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Religion and Social Resilience in West Java (Jurnal Studi Agama, Vol. 12, No. 2, 2022, 40–70)", jumlahSitasi: 3 },
{ name: "Prof. Dr. H. Encup S, M.Si", judul: "Socio-Economic Policy Analysis Post-Pandemic (Jurnal Ekonomi dan Sosial, Vol. 9, No. 1, 2022, 25–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Sundanese Qur’anic Studies and Modern Pedagogy (Jurnal Pendidikan Islam, Vol. 20, No. 1, 2022, 20–50)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Translation and Interpretation of Qur’anic Texts (Jurnal Al-Qur’an dan Tafsir, Vol. 8, No. 1, 2022, 15–45)", jumlahSitasi: 3 },
{ name: "Prof. Dr. Jajang A Rohmana, M.Ag", judul: "Islamic Reformist Movements in West Java (Jurnal Ilmu Sosial dan Budaya, Vol. 16, No. 2, 2022, 30–60)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Digital Transformation in Islamic Education (Jurnal Pendidikan Islam, Vol. 17, No. 1, 2022, 10–35)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "E-Learning Pedagogy for Religious Studies (Jurnal Pendidikan dan Teknologi, Vol. 9, No. 2, 2022, 20–50)", jumlahSitasi: 2 },
{ name: "Dr. H. M. Dulkiah, M.Si, CSP.", judul: "Blended Learning for Pesantren Students (Jurnal Ilmu Pendidikan Islam, Vol. 16, No. 2, 2022, 25–50)", jumlahSitasi: 1 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Digital Learning Tools in Islamic Higher Education (Jurnal Pendidikan Islam, Vol. 27, No. 1, 2022, 25–50)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "ICT Strategies for Religious Education (Jurnal Pendidikan Islam, Vol. 28, No. 2, 2022, 30–55)", jumlahSitasi: 2 },
{ name: "Prof. Dr. Asep Saefuddin, M.Ag.", judul: "Online Pedagogy Implementation in Pesantren (Jurnal Pendidikan Islam, Vol. 29, No. 1, 2022, 20–45)", jumlahSitasi: 1 }
];
  

export const hkiData: {
  judul: string;
  tahun: number;
  nomorHki: string;
}[] = [
  { judul: "The Role of Culture and Other Social Aspects on Health (Prof. Dr. Endah Ratna Chotim, M.Ag., M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000359423" },
  { judul: "Aplikasi Modal Sosial Dalam Pemberdayaan Masyarakat Perkotaan dan Pedesaan di Wilayah Jakarta dan Jawa Barat (Dr. H. Moh. Dulkiah, M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000336306" },
  { judul: "Resiliensi Masyarakat Dalam Pemeliharaan Nilai-Nilai Agama, Sosial dan Pendidikan (an. Dr. H. Moh. Dulkiah, M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000256889" },
  { judul: "Peran Kyai Dan Ajengan Dalam Perubahan Sosial Masyarakat Desa Ciakar (Rini Sulastri, S.Sos., M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000217194" },
  { judul: "Organisasi Gerakan Islamis dan Keamanan di Jawa Barat dan Banten (M. Taufiq Rahman, Ph.D)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000361137" },
  { judul: "Sosiologi Industri (Dr. Hikmat, M.Ag)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000195524" },
  { judul: "Antropologi Sosial (Endah Ratna Sonya, M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000382172" },
  { judul: "Sakralitas Virtual: Makna Sakral Dalam Ibadah Salat Jumat Virtual Di Indonesia (Dr. Dede Syarif, M.Ag)", tahun: 2022, nomorHki: "No. Pencatatan Kemenkumham 000397287" },
  { judul: "Peran Komunitas Layarbaca.com Dalam Meningkatkan Budaya Literasi Pada Era Digital (Endah Ratna Sonya, M.Si.)", tahun: 2022, nomorHki: "No. Pencatatan Kemenkumham 000396189" },
  { judul: "Strategi Model Pengajaran Nilai Sosial Dalam Pendidikan Karakter Di Madrasah (Dr. Moh. Dulkiah, M.Si dan Asep Dadan Wildan, MA)", tahun: 2022, nomorHki: "No. Pencatatan Kemenkumham 000429528" },
  { judul: "Integrasi Nilai Agama Dan Budaya Pada Kepemimpinan Sunda Di Jawa Barat (Prof, Dr. Adon Nasurullah J., M.Ag)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000262210" },
  { judul: "Optimalisasi Peran Ekonomi, Pendidikan, & Teknologi Informasi Pada Masa Pandemi Covid-19 (Rini Sulastri, M.Si.)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000244739" },
  { judul: "Pola Penyebaran Hoaks pada Kalangan Mahasiswa Perguruan Tinggi Islam di Kota Bandung (Dr. Moh. Dulkiah, M.Si)", tahun: 2021, nomorHki: "No. Pencatatan Kemenkumham 000299420" },
  { judul: "Dual-Earner Family dalam Pandangan Masayarakat dan Pemahaman Keagamaan Islam (Rini Sulastri, M.Si)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000344670" },
  { judul: "Organisasi Gerakan Islamis dan Keamanan di Jawa Barat dan Banten (M. Taufiq Rahman, PhD)", tahun: 2022, nomorHki: "No. Pencatatan Kemenkumham 000361137" },
  { judul: "PROMOTING MODERATE ISLAM THROUGH EDUCATIONAL INSTITUTION: (Faculty Of Ushuluddin, UIN Bandung And Central For Islamic Thought And Education (CITE), University Of South Australia Compared) (Prof. Ahmad Ali Nurdin. PhD)", tahun: 2020, nomorHki: "No. Pencatatan Kemenkumham 000102240" },
  { judul: "Sosiologi Industri (Dr. Hikmat, M.Ag)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000195524" },
  { judul: "Komunikasi antar Budaya Dalam Perspektif Sosiologi (Dr. Hamzah Turmudi, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000190918" },
  { judul: "Perspektif Interaksinisme simbolik tentang Ijtihad Siyasi sebagai Akar Politik Persatuan Islam (Dr. Hamzah Turmudi, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000190916" },
  { judul: "Participatory Communication Based On Digital Platforms For Commmunities In Indonesia (Dr. Hamzah Turmudi, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000190914" },
  { judul: "Fenomenologi Komunikasi Politik Persatuan Islam (Dr. Hamzah Turmudi, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000190916" },
  { judul: "Nalar-Nalar Islam (Dr. H. Nurmawan, M.Ag)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000186718" },
  { judul: "Agama dan Politik (Prof. Ahmad Ali Nurdin, P.hD.)", tahun: 2020, nomorHki: "No. Pencatatan Kemenkumham 000189499" },
  { judul: "Dasar-Dasar Pendidikan untuk Guru (Dr. H. Endang Hermawan, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000187029" },
  { judul: "Upaya mencapai Guru Profesional (Dr. H. Endang Hermawan, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000187028" },
  { judul: "Pengantar Psikologi Pendidikan (Dr. H. Endang Hermawan, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000186978" },
  { judul: "Perberdayaan Remaja Mesjid Dalam Meningkatkan Perilaku Keagamaan (Endah Ratna Sonya, M.Si)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000217207" },
  { judul: "Efektifitas Belajar Statistika Dengan Motode Assisted Individualization Pada Mahasiswa Sosiologi Fakultas Ilmu Sosial dan Ilmu Politik (Vera Octavia, M.Stat.)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000153532" },
  { judul: "Akseptabilitas Penduduk Bantaran Sungai Terhadap Sosialisasi Program Citarum Harum (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000163444" },
  { judul: "Pengantar Sosiologi (Prof. Dr. H. Encup S., M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000389890" },
  { judul: "Exploring The Determinants Of Media Technology Rejection By Religious Communities In Indonesia: The Case Of “Aspek” Communities In West Java, Indonesia (Asep M. iqbal PhD)", tahun: 2022, nomorHki: "No. Pencatatan Kemenkumham 000323867" },
  { judul: "Adaptasi Media Sosial Oleh Organisasi Keagamaan Di Indonesia: Studi Kanal YouTube Nahdlatul Ulama, NU Channel (Asep M. Iqbal, PhD)", tahun: 2022, nomorHki: "No. Pencatatan Kemenkumham 000403363" },
  { judul: "How To Write And Publish A Research Paper For A Peer-Reviewed Journal (Prof. Dr. Endah Ratnawaty Chotim, M.Ag., M.Si.)", tahun: 2023, nomorHki: "No Pencatatan Kemenkumham 000448712" },
  { judul: "SOSIOLOGI Untuk SMA Dan MA Kelas X (Dr. H. Endang Hermawan, M.M)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000295811" },
  { judul: "Gerakan Sosial Indonesia (Dr. Hikmat., M.Ag)", tahun: 2020, nomorHki: "No. Pencatatan Kemenkumham 000195525" },
  { judul: "Wawasan Kebangsaan Uin Sunan Gunung Djati Bandung (Dr. Moh. Dulkiah, M.Si.)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000255764" },
  { judul: "Berkah Dibalik Musibah (Dr. H. Endang Hermawan, M.M)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000405977" },
  { judul: "Menggapai Asa Ditengah Wabah Corona (Dr. H. Endang Hermawan, M.M)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000406007" },
  { judul: "Meraih Mimpi Dibalik Pandemik (Dr. H. Endang Hermawan, M.M)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000406028" },
  { judul: "Contrasting trajectories of Shia Emergence in Post New Order Indonesia (Dr. Dede Syarif, M.Ag, CISE)", tahun: 2021, nomorHki: "No. Pencatatan Kemenkumham 000299422" },
  { judul: "Pemberdayaan Usaha Mikro Berbasis Pesantren Dalam Membentuk Solidaritas Sosial Anggota Halaqoh Mingguan (HALMI) (Dr. Nurmawan, M.Ag. dan Rini Sulastri, S.Sos., M.Si)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000394407" },
  { judul: "Analisis Masalah Sosial (Rini Sulastri, M.Si.)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000402518" },
  { judul: "Konflik Sektarian Di Jawa Barat: Analisis Latar Belakang Kemunculan, Ajaran Yang Dikembangkan Dan Penanganan Konfliknya (Prof. Dr. Adon Nasurullah Jamaludin, M.Ag dan Prof. Ahmad Ali Nurdin, MA., Ph.D)", tahun: 2023, nomorHki: "No Pencatatan Kemenkumham 000477555" },
  { judul: "Simulacra And Hyperreality: Fashion Influencer Instagram @farhanabodi (Rasdica Denara Hernowo Puteri, M.Si.)", tahun: 2023, nomorHki: "No Pencatatan Kemenkumham 000450484" },
  { judul: "Implementasi Metode Pembelajaran Aktif, Kreatif, Efektif Dan Menyenangkan (PAKEM) Guna Meningkatkan Kemampuan Akademik Dan Semangat Belajar Siswa (Drs. Moh. Anif Arifani, M.Ag.)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000420121" },
  { judul: "Penerapan Metode Pembelajaran Kooperatif Scramble (Drs. Moh. Anif Arifani, M.Ag.)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000420117" },
  { judul: "Urgensi Pendidikan Dalam Kekerasan Seksual Terhadap Remaja Putra (Drs. Moh. Anif Arifani, M.Ag)", tahun: 2022, nomorHki: "No Pencatatan Kemenkumham 000420118" },
  { judul: "Konflik Agama dan Penyelesaiannya: Kasus Ahmadiyah di kabupatenTasikmalaya Jawa Barat (Dr. M. Zuldin, M.Si)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000299421" },
  { judul: "Pemberdayaan Masyarakat Melalui Program Pendidikan dan Edukasi Kesehatan (Rini Sulastri, M.Si)", tahun: 2021, nomorHki: "No Pencatatan Kemenkumham 000291364" },
  { judul: "Aktualisasi Konseling Sufistik Pada Pengembangan Jiwa Anak Di Yayasan Asuhan Ar-Rifqi Kota Bandung (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000192077" },
  { judul: "Politik Identitas Islam Dalam Tradisi Kebangsaan Indonesia (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000207750" },
  { judul: "Turning Religion From Cause To Reducer Of Panic During The COVID-19 Pandemic (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No Pencatatan Kemenkumham 000221864" },
  { judul: "Keberagamaan Masyarakat Pesisir Patimban Subang: Studi Tentang Corak Islam Lokal Di Indonesia (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No. Pencatatan Kemenkumham 000221863" },
  { judul: "The Impact Of Using Instagram Social Media On Student Consumptive Behavior (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No. Pencatatan Kemenkumham 000232097" },
  { judul: "Theoretical Chasm On Waste Management In Bandung Regency (M. Taufiq Rahman, PhD)", tahun: 2020, nomorHki: "No. Pencatatan Kemenkumham 000197600" }
];


export const produkProdi: {
  judul: string;
  tahun: number;
  keterangan: string;
}[] = [
  {
    judul: "Modul Moderasi Beragama",
    tahun: 2021,
    keterangan:
      "Digunakan pada Rumah Moderasi untuk Pelatihan Moderasi Beragama di Kemenag",
  },
  {
    judul:
      "Policy Paper Islamic preaching and state regulation in Indonesia",
    tahun: 2020,
    keterangan:
      "Digunakan pada The Centre for Indonesian Law, Islam and Society (CILIS), Melbourne Law School, University of Melbourne, Australia",
  },
  {
    judul: "Policy Paper Bandung Kota Agamis",
    tahun: 2020,
    keterangan:
      "Digunakan pada Pemerintah Dinas Kota Bandung, Jawa Barat",
  },
];

export const isbnData: {
  judul: string;
  tahun: number;
  keterangan: string;
}[] = [
  {
    judul: "Pengantar Sosiologi (Prof. Dr. H. Encup Supriatna, M.Si)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-09-0522-3",
  },
  {
    judul: "Model penelitian sosiologi (Prof. Dr. H. Encup Supriatna, M.Si)",
    tahun: 2021,
    keterangan: "ISBN Nomor : 978-979-076-792-8",
  },
  {
    judul: "Relasi Agama Dan Pengetahuan Ekologi Tradisional Pada Masyarakat Adat Di Jawa Barat (Prof. Dr. Adon Nasrullah J., M.Ag)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-5485-00-3",
  },
  {
    judul: "Integrasi Nilai Agama Dan Budaya Pada Kepemimpinan Sunda Di Jawa Barat (Prof. Dr. Adon Nasrullah J., M.Ag)",
    tahun: 2021,
    keterangan: "ISBN Nomor : 978-623-6489-00-0",
  },
  {
    judul: "Spiritual Resilience: Faktor-Faktor Yang Meningkatkan Ketahanan Spiritual (Vera Oktavia, M.Stat)",
    tahun: 2021,
    keterangan: "ISBN Nomor : 978-623-96154-4-4",
  },
  {
    judul: "Resiliensi masyarakat dalam pemeliharaan nilai nilai agama, sosial dan pendidikan : Kegiatan pendampingan bagi masyarakat terdampak industri di Kecamatan Sumberjaya Kabupaten Majalengka (Dr. H. Dulkiah, M.Si)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-6946-89-3",
  },
  {
    judul: "Sistem sosial di Indonesia. (Dr. H. Dulkiah, M.Si)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-6070-16-1",
  },
  {
    judul: "Sosiologi Kriminal (Dr. H. Dulkiah, M.Si)",
    tahun: 2020,
    keterangan: "ISBN Nomor :978-623-6070-24-6",
  },
  {
    judul: "Sosiologi pendidikan (Dr. H. Dulkiah, M.Si)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-6070-06-2",
  },
  {
    judul: "Nalar-nalar islam (Dr. Nurmawan, M. Ag)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-9113-93-3",
  },
  {
    judul: "Upaya Mencapai Guru Profesional (Dr. Endang Hermawan, M. Si)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-9198-61-9",
  },
  {
    judul: "Pengantar Psikologi Pendidikan (Dr. Endang Hermawan, M. Si.)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-9198-62-6",
  },
  {
    judul: "Panduan pengelolaan masjid Persis (Dr. Nurmawan, M. Ag.)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-602-0962-21-6",
  },
  {
    judul: "Pokok-Pokok Kajian Industri (Dr. Hikmat, M.Ag.)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-92591-4-4",
  },
  {
    judul: "Informan Kolonial dan Perang Aceh: Surat-surat Penghulu Kutaraja Haji Hasan Mustapa untuk C. Snouck Hurgronje Tahun 1893 (Cod. Or. 18.097 S16). ( Prof. dr. Jajang A Rohmana, M. Ag.)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-200-139-8",
  },
  {
    judul: "Terjemahan Puitis Al-Qur’an: Dangding dan Pupujian Al-Qur’an di Jawa Barat ( Prof. Dr. Jajang A Rohmana, M. Ag.)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-602-73599-9-4",
  },
  {
    judul: "Terapi sufistik sebagai terapi alternatif untuk kesehatan mental (Prof. Dr.Endah Ratnawaty Chotim, M.Ag.,M.Si)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-5485-06-5",
  },
  {
    judul: "Relasi Agama Dan Pengetahuan Ekologi Tradisional Pada Masyarakat Adat Di Jawa Barat (Prof. Ahmad Ali Nurdin, MA., Ph.D)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-5485-00-3",
  },
  {
    judul: "Sosiologi Agama (Prof. Ahmad Ali Nurdin, MA., Ph.D)",
    tahun: 2021,
    keterangan: "ISBN Nomor: 978-623-312-668-7",
  },
  {
    judul: "Pola koalisi partai keadilan sejahtera pada pilkada 2018 di Jawa Barat : antara ideologis dan strategi politik (Prof. Ahmad Ali Nurdin, MA., Ph.D)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-623-92341-5-7",
  },
  {
    judul: "Kredibilitas periwayat Kufah sumber elektronis : kajian al-jarh wa al-ta’dil dengan pendekatan sosiohistoris (Prof. Dr. Jajang A Rohmana, M.Ag.)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-602-441-181-7",
  },
  {
    judul: "Hermeneutika moderat teori penafsiran teks dalam pandangan Paul Ricoeur dan Al-Jurjani (Prof. Dr. Jajang A Rohmana, M.Ag)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-602-441-182-4",
  },
  {
    judul: "Metode tafsir esoeklektik : pendekatan integratif untuk memahami kandungan batin Al-Qur’an (Prof. Dr. Jajang A Rohmana, M.Ag)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-602-441-185-5",
  },
  {
    judul: "Politik pencitraan PKS dalam pilgub Jabar 2018 [sumber elektronis] (Dr. Hamzah Turmudi, M.Si)",
    tahun: 2021,
    keterangan: "ISBN Nomor: 978-623-6524-03-9",
  },
  {
    judul: "Komunikasi Politik Elite Golkar dalam Rekonsiliasi Dualisme Kepemimpinan Partai (Dr. Hamzah Turmudi, M.Si)",
    tahun: 2021,
    keterangan: "ISBN Nomor: 978-623-6524-04-6",
  },
  {
    judul: "Wawasan kebangsaan (Dr. H. Moh. Dulkiah, M.Si., CSP.)",
    tahun: 2021,
    keterangan: "ISBN Nomor: 978-623-6070-84-0",
  },
  {
    judul: "Aplikasi modal sosial dalam pemberdayaan masyarakat perkotaan dan pedesaan di wilayah Jakarta dan Jawa Barat (Dr. H. Moh. Dulkiah, M.Si., CSP.)",
    tahun: 2022,
    keterangan: "ISBN Nomor: 978-623-99555-7-1",
  },
  {
    judul: "Organisasi Gerakan Islamis dan Keamanan di Jawa Barat dan Banten (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2022,
    keterangan: "ISBN Nomor: 978-623-5401-15-7",
  },
  {
    judul: "Toleransi dan Perdamaian di Masyarakat Multikultural (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2022,
    keterangan: "ISBN Nomor: 978-623-99805-6-6",
  },
  {
    judul: "Sosiologi Islam (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2021,
    keterangan: "ISBN Nomor: 978-623-95343-8-7",
  },
  {
    judul: "Toleransi Beragama dan Harmonisasi Sosial (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2021,
    keterangan: "ISBN Nomor: 978-623-6207-29-1",
  },
  {
    judul: "Filsafat Ilmu Pengetahuan (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-623-94239-9-5",
  },
  {
    judul: "Agama dan Politik Identitas dalam Kerangka Sosial (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-623-94043-0-7",
  },
  {
    judul: "Peran Keluarga dan Bimbingan Sufistik dalam Mengembangkan Religiusitas Anak (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-623-94043-2-1",
  },
  {
    judul: "Penciptaan dan Pemeliharaan Alam dalam Perspektif Al-Qur‘an (Mohammad Taufiq Rahman, Ph.D., CISE.)",
    tahun: 2020,
    keterangan: "ISBN Nomor: 978-623-94239-7-1",
  },
  {
    judul: "Jaringan intelektual Mekah dan Banten abad ke-19 : Tiga karya Nawawi Banten yang hilang (Dr. Muhamad Zuldin, M.Si)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-5485-13-3",
  },
  {
    judul: "Islam dan regionalisme : studi kontemporer tentang Islam di Indonesia (Dr. Dede Syarif, M.Ag)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-979-419-437-9",
  },
  {
    judul: "Aktualisasi pendidikan dan pemberdayaan masyarakat di tengah pandemi covid-19 (Dr, Siti Chodijah, M.Ag)",
    tahun: 2021,
    keterangan: "ISBN Nomor : 978-623-6070-43-7",
  },
  {
    judul: "Sosiologi dan manajemen keluarga dalam perspektif islam (Dr. Siti Chodijah, M.Ag.)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-602-5668-36-4",
  },
  {
    judul: "Optimalisasi peran ekonomi, pendidikan, & teknologi informasi pada masa pandemi Covid-19 (Rini Sulastri, M.Si)",
    tahun: 2021,
    keterangan: "ISBN Nomor : 978-623-7348-86-3",
  },
  {
    judul: "Pemberdayaan usaha mikro berbasis pesantren dalam membentuk solidaritas sosial (Rini Sulastri, M.Si)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-459-296-2",
  },
  {
    judul: "Tafsir sunda dan kontribusinya bagi khazanah kajian keagamaan di indonesia : studi kasus pengenalan dan pengajaran tafsir Sunda di Majlis Ta’lim (Asep M. Iqbal. PhD)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-7166-64-1",
  },
  {
    judul: "Exploring the determinants of media technology rejection by religious communities in Indonesia : aspek communities in west Java, Indonesia (Asep M. Iqbal, PhD)",
    tahun: 2022,
    keterangan: "ISBN Nomor : 978-623-7166-65-8",
  },
  {
    judul: "Sinergi mengabdi di tengah pandemi Covid-19 (Asep M. Iqbal, PhD)",
    tahun: 2020,
    keterangan: "ISBN Nomor :978-623-6946-28-2",
  },
  {
    judul: "Inovasi pemberdayaan masyarakat di tengah pandemi Covid (Asep M. Iqbal PhD)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-6946-28-2",
  },
  {
    judul: "Kuliah kerja nyata pada masa pandemi Covid-19 (Asep M. Iqbal, PhD)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-6946-29-9",
  },
  {
    judul: "Relasi antaragama dan ulama nusantara : pandangan Syeikh Nawai Banten tentang Yahudi dan Nasrani dalam kitab tafsirnya Marah Labid (Asep M. Iqbal, PhD)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-7036-17-3",
  },
  {
    judul: "Etnomedisin : khasiat & manfaat pucuk daun mangga (Dr. Aep Saepuloh, M.Si)",
    tahun: 2021,
    keterangan: "ISBN Nomor : 978-623-98785-0-4",
  },
  {
    judul: "Akulah bumi & engkaulah langit (Dr. Kustana, M.Si)",
    tahun: 2020,
    keterangan: "ISBN Nomor : 978-623-93206-0-7",
  },
];


export const pkmData: {
  judul: string;
  dosen: string;
  mataKuliah: string;
  bahanIntegrasi: string;
  tahun: number;
}[] = [
  {
    judul: "The dynamic of religious life: A study of conflict and integration of Ahmadiyah in Garut, Tasikmalaya and Kuningan, West Java",
    dosen: "Prof. Dr. Adon Nasrullah Jamaludin, M.Ag.",
    mataKuliah: "Konflik dan Resolusi Konflik",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Konstruksi Kesadaran Gender pada Remaja: Memahami Kesadaran Gender dengan Pendekatan Kelompok Sebaya",
    dosen: "Prof. Dr. H. Endah Ratnawati Chotim, M.Si.",
    mataKuliah: "Sosiologi Gender",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Politics of Identity in Indonesia: Evidences and Future Directions",
    dosen: "Prof. Dr. H. Encup Supriatna, M.Si.",
    mataKuliah: "Pengantar Ilmu Politik",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Cities and villages in the religious conflict circle: Socio-demographic factors of communal and sectarian conflict in West Java, Indonesia",
    dosen: "Dr. Adon Nasrullah Jamaludin, M.Ag.",
    mataKuliah: "Konflik dan Resolusi Konflik",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2021,
  },
  {
    judul: "Participatory Communication Based on Digital Platforms for Communities in Indonesia",
    dosen: "Dr. Hamzah Turnudi, M.Si.",
    mataKuliah: "Sosiologi Digital",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Konflik Keagamaan di Indonesia (Studi Tentang Pola Konflik dan Model Penanganan Konflik Keagamaan di Jawa Barat)",
    dosen: "Dr. Kustana, M.Si.",
    mataKuliah: "Konflik dan Resolusi Konflik",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Pola Penyebaran Hoaks pada Kalangan Mahasiswa Perguruan Tinggi Islam di Kota Bandung",
    dosen: "Dr. H. Moh. Dulkiah, M.Si.",
    mataKuliah: "Sosiologi Digital",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Political Will Government in Prevention of Post-Reform Corruption in Indonesia",
    dosen: "Dr. H. Moh. Dulkiah, M.Si.",
    mataKuliah: "Sosiologi Hukum",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "The impact of social distancing in economic, cultural and religious views",
    dosen: "Endah Ratna Sonya, M.Si.",
    mataKuliah: "Antropologi Sosial",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2021,
  },
  {
    judul: "Challenging moderate Islam in Indonesia",
    dosen: "Asep Muhamad Iqbal, MA., Ph.D",
    mataKuliah: "Masyarakat dan Moderasi Beragama",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Religious Framing of New Media Technology: Islamic Salafi Movement in Indonesia and Its Communal Narratives of the Internet",
    dosen: "Asep Muhamad Iqbal, MA., Ph.D",
    mataKuliah: "Sosiologi Digital",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Commodification and Shifting of Functions in the Tradition of Ngadatangkeun in Sundanese Society",
    dosen: "Dr. Dede Syarif, S.Sos., M.Ag., CISE.",
    mataKuliah: "Sosiologi Masyarakat Sunda",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2021,
  },
  {
    judul: "Ketimpangan Sebagai Penyebab Konflik: Kajian atas Teori Sosial Kontemporer",
    dosen: "Dr. Muhamad Zuldin, M. ASi.",
    mataKuliah: "Konflik dan Resolusi Konflik",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "The Concept of Human Degree Equality in The Qur'an Scripture Perspective: Interpretation of The Letter Of Al-Hujarat Verses 13",
    dosen: "H. Asep Dadan Wildan, MA.",
    mataKuliah: "Tafsir Sosial",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Negotiating identity of Indonesian muslims in Australia",
    dosen: "Dr. Dede Syarif, S.Sos., M.Ag., CISE.",
    mataKuliah: "Sosiologi Islam",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Efektifitas Pembelajaran Statistika Dengan Metode Team Assisted Individualization Terhadap Hasil Belajar Mahasiswa",
    dosen: "Vera Octavia, S.Si., M.Stat.",
    mataKuliah: "Statistika Sosial",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2022,
  },
  {
    judul: "Enhancing Inter-Ethnic Harmony in a Multicultural Society: Lessons from a Case Study of the Harmonization of Malay and Chinese Ethnicities in Belitung Island",
    dosen: "Irwandi, S.Sos., S.E., M.Ag.",
    mataKuliah: "Sosiologi Industri",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2023,
  },
  {
    judul: "Pemberdayaan Usaha Mikro Berbasis Pesantren dalam Membentuk Solidaritas Sosial Anggota Halaqoh Mingguan (HALMI)",
    dosen: "Dr. Nurmawan & Rini Sulastri, S.Sos., M.Si.",
    mataKuliah: "Pemberdayaan Masyarakat",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2022,
  },
  {
    judul: "Analisis Terhadap Pemikiran Ali Syari’ati Tentang Konsep Humanisme Islam",
    dosen: "Asep Dadan Wildan, MA.",
    mataKuliah: "Sosiologi Islam",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2020,
  },
  {
    judul: "Sociology of Religious Extremism in the Malay World: A Preliminary Analysis",
    dosen: "M. Taufiq Rahman, M.A., Ph.D",
    mataKuliah: "Sosiologi Agama",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2023,
  },
  {
    judul: "Women's Participation in Simultaneous Village Head Elections in Bandung Regency",
    dosen: "Rini Sulastri, M.Si",
    mataKuliah: "Sosiologi Pesantren",
    bahanIntegrasi: "Bahan Ajar Mata Kuliah",
    tahun: 2023,
  },
];
