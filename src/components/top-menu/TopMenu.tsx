"use client";

import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "@/i18n";

export const TopMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const menuItems = [
    { label: t("menu.acerca"), href: "#acerca" },
    { label: t("menu.portafolio"), href: "#proyectos" },
    { label: t("menu.contacto"), href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex px-5 lg:px-12 justify-between items-center h-16 bg-[#13132A]/50 backdrop-blur-sm shadow-sm">
      {/* Logo Section */}
      <div className="flex-1 flex justify-start items-center gap-2">
        <Link
          href="/"
          className="inline-block hover:scale-[1.02] transition-transform"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector("#banner");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }
          }}
        >
          <p
            className={`${titleFont.className} text-[18px] md:text-[20px] gradient-text font-semibold`}
          >
            Karely Durán
          </p>
        </Link>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        <FiMenu className="w-7 h-7 text-[#a127c1]" />
      </button>

      {/* Navigation Links Desktop */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-8 ">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${titleFont.className} relative px-2 py-1 text-[15px] font-normal text-white hover:bg-[#18162a] rounded-xl transition-colors group`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(item.href);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }
            }}
          >
            {item.label}
            <span
              className="absolute inset-x-0 mx-auto -bottom-px h-px w-1/2
         bg-gradient-to-r from-transparent via-[#9e4ae5] to-transparent
         scale-x-0 group-hover:scale-x-100
         transform origin-center
         transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
      {/* Language Switch Button */}
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
        }
        className={`${titleFont.className} relative px-2 py-1 text-[15px] font-normal text-white hover:bg-[#18162a] rounded-xl transition-colors group`}
        aria-label={
          i18n.language === "es" ? "Cambiar a inglés" : "Switch to Spanish"
        }
      >
        {i18n.language === "es" ? "EN" : "ES"}
        <span
          className="absolute inset-x-0 mx-auto -bottom-px h-px w-1/2
         bg-gradient-to-r from-transparent via-[#9e4ae5] to-transparent
         scale-x-0 group-hover:scale-x-100
         transform origin-center
         transition-transform duration-300"
        />
      </button>

      {/* Navigation Links Mobile */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#13132A]/50 shadow-lg flex flex-col items-center gap-4 py-4 md:hidden z-50 animate-fade-in">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${titleFont.className} relative px-2 py-1 text-[15px] font-normal text-white hover:bg-[#18162a] transition-colors group`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector(item.href);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
