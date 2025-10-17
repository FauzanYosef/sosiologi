import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width?: number;
  height?: number;
  variant?: "primary" | "secondary";
  withText?: boolean;
};

const Logo: React.FC<LogoProps> = ({
  width = 48,
  height = 48,
  variant = "primary",
  withText = true,
}) => {
  const logoSrc =
    variant === "secondary"
      ? `${getImagePrefix()}images/logo/logo-secondary.png`
      : `${getImagePrefix()}images/logo/logo.png`;

  return (
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src={logoSrc}
        alt="logo"
        width={width}
        height={height}
        className="h-auto"
        quality={100}
        priority
      />

      {/* Divider */}
      {withText && <div className="w-px h-10 bg-gray-400 mx-2" />}

      {withText && (
        <div className="flex flex-col leading-tight space-y-2">
          <span className="font-bold text-md text-primary">
           Departemen Sosiologi 
          </span>
          <span className="text-md text-gray-700">
            UIN Sunan Gunung Djati Bandung
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
