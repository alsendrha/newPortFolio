"use client";
import { navData } from "@/utils/data/listData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NevBar = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  return (
    <nav
      className={`w-full h-[60px] ${scroll === 0 ? "bg-transparent" : "bg-black"
        } text-white flex items-center justify-center fixed z-10`}
    >
      <div className="w-full flex justify-between items-center max-w-[1170px] px-2">
        <Link href="/">
          <p className="font-extrabold">MIN YOUNG</p>
        </Link>
        <ul className="flex gap-8">
          {navData.map((data, index) => (
            <Link key={index} href={`#${data}`}>
              <li>{data}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NevBar;
