import Link from "next/link";

type LogoProps = {
  title: string;
};

const Logo = ({ title }: LogoProps) => {
  return (
    <Link href="/">
      <p className="font-extrabold">{title}</p>
    </Link>
  );
};

export default Logo;
