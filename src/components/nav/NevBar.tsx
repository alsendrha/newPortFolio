"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import MenuList from "./MenuList";
import Logo from "./Logo";

const NevBar = () => {
  const [scroll, setScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
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
      className={`w-full h-[60px] ${
        scroll === 0 ? "bg-transparent" : "bg-black"
      } text-white flex items-center justify-center fixed z-[999]`}
    >
      <div className="w-full flex justify-between items-center max-w-[1170px] px-10">
        <Logo title="MIN YOUNG" />
        <div className="relative">
          <MenuButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <MenuList menuOpen={menuOpen} onClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
};

export default NevBar;
