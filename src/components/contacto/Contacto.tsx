"use client";

import React from "react";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";
import AnimatedSection from "../common/AnimatedSection";
import { Button } from "../ui/moving-border";
import { useTranslation } from "react-i18next";
import { bodyFont, titleFont } from "@/config/fonts";

export const Contacto = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection>
      <section id="contacto" className=" w-full py-12 mb-15">
        <div className="flex flex-col items-center justify-center w-full px-4 mb-5 py-14 md:py-0">
          <h1
            className={`${titleFont.className} text-5xl sm:text-6xl md:text-6xl font-bold gradient-text mb-8 text-center`}
          >
            {t("contactInfo.title")}
          </h1>
          <p
            className={`${bodyFont.className} text-base sm:text-lg md:text-xl text-white mb-12 max-w-6xl text-center`}
          >
            {t("contactInfo.description")}
          </p>
          <Button
            as="a"
            href="/cv-Karely Duran.pdf"
            download
            className={`${titleFont.className}`}
          >
            {t("navbarAccessibility.cv")}
          </Button>
          <div className="flex gap-6 my-8">
            <a
              href="https://www.linkedin.com/in/karelyd-code"
              className="bg-[#18162a]/80 hover:bg-[#a127c1]  rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/karelycode"
              className="bg-[#18162a]/80 hover:bg-[#a127c1]  rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
            >
              <IoLogoGithub />
            </a>
            <a
              href="mailto:karelycode@gmail.com"
              className="bg-[#18162a]/80 hover:bg-[#a127c1] rounded-full p-4 flex items-center justify-center text-white text-2xl shadow-lg transition-transform hover:scale-110"
            >
              <IoMail />
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
