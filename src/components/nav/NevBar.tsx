"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import MenuList from "./MenuList";

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

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.clientHeight || 0;
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

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
          <MenuList menuOpen={menuOpen} handleNavClick={handleNavClick} />
        </div>
      </div>
    </nav>
  );
};

export default NevBar;
