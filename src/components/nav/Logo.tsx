import Link from "next/link";
import React from "react";

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
