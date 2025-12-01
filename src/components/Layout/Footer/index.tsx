import Link from "next/link";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const Footer = () => {
  return (
    <footer className="bg-deepSlate text-primary py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Logo & Social */}
          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <Logo />
            <div className="flex gap-4 text-2xl mt-4">
              <Link href="https://www.instagram.com/fisipuinsgd_official/" className="hover:text-primary transition-colors">
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="https://www.instagram.com/fisipuinsgd_official/" className="hover:text-primary transition-colors">
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link href="https://www.instagram.com/fisipuinsgd_official/" className="hover:text-primary transition-colors">
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            {/* <div>
              <h5 className="mb-3 font-semibold">Links</h5>
              <ul className="space-y-2">
                {headerData.map((item, idx) => (
                  <li key={idx} className="hover:text-primary transition-colors">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div> */}
            <div>
              <h5 className="mb-3 font-semibold">Quick Links</h5>
              <ul className="space-y-2">
                <li className="hover:text-black transition-colors text-sm "><Link href="#">Daftar PMB</Link></li>
                <li className="hover:text-black transition-colors text-sm "><Link href="#">Brosur UIN SGD</Link></li>
                <li className="hover:text-black transition-colors text-sm "><Link href="#">Jalur Seleksi</Link></li>
                <li className="hover:text-black transition-colors text-sm "><Link href="#">Perkiraan Biaya Studi</Link></li>
                <li className="hover:text-black transition-colors text-sm "><Link href="#">Beasiswa</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Alamat */}
            <div className="flex gap-3 items-start">
              <div className="flex-shrink-0">
                <Icon icon="tabler:brand-google-maps" className="text-primary text-2xl mt-1" />
              </div>
              <div className="text-primary text-sm leading-relaxed">
                <span className="font-semibold">Kampus I UIN SGD Bandung</span>
                <br />
                Jalan A.H. Nasution No. 105, Cipadung, Cibiru, Kota Bandung, Jawa Barat 40614
              </div>
            </div>

            {/* Telepon */}
            <div className="flex gap-3 items-center">
              <Icon icon="tabler:phone" className="text-primary text-2xl" />
              <span className="text-primary text-sm">+45 3411-4411</span>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center">
              <Icon icon="tabler:folder" className="text-primary text-2xl" />
              <span className="text-primary text-sm">info@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-primary gap-3">
          <div className="flex gap-4">
            <Link href="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
          <div>
            Development by <Link href="https://fisip.uinsgd.ac.id" target="_blank" className="hover:text-primary transition-colors">FISIP UIN Bandung</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
