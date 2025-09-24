"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/moving-border";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { bodyFont, titleFont } from "@/config/fonts";

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      id="banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className="relative w-full min-h-[30vh] py-20 mt-50 mb-35"
    >
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
        <div className="w-full absolute  h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1
          className={`${titleFont.className} text-6xl sm:text-7xl md:text-8xl font-bold gradient-text mb-4 text-center`}
        >
          {t("headerInfo.headerTitle")}
        </h1>
        <h2
          className={`${titleFont.className} text-base sm:text-2xl md:text-3xl font-bold text-white mb-4 text-center`}
        >
          {t("headerInfo.headerProfession")}
        </h2>
        <p
          className={`${bodyFont.className} text-base sm:text-lg md:text-xl text-white mb-8 max-w-6xl text-center`}
        >
          {t("headerInfo.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-lg">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#proyectos");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Button className={`${bodyFont.className}`}>
              {t("navbarAccessibility.projects")}
            </Button>
          </Link>
          <Button as="a" href="/cv-Karely Duran.pdf" download>
            <span className={`${bodyFont.className}`}>
              {t("navbarAccessibility.cv")}
            </span>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
