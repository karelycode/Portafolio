"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IoCodeOutline, IoMapOutline } from "react-icons/io5";
import AnimatedSection from "../common/AnimatedSection";
import { useTranslation } from "react-i18next";
import { bodyFont, titleFont } from "@/config/fonts";

export const AcercaDe = () => {
  const { t } = useTranslation();
  return (
    <AnimatedSection>
      <section id="acerca" className=" w-full py-40 mb-15">
        <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
          <h1
            className={`${titleFont.className} text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-8 text-center`}
          >
            {t("titles.acercaTitle")}
          </h1>
          <p
            className={`${bodyFont.className} text-base sm:text-lg md:text-xl text-white mb-12 max-w-6xl text-center`}
          >
            {t("bioInfo.description")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
            <BackgroundGradient className="bg-[#18162a] rounded-3xl p-4 min-w-[220px] w-full sm:w-[320px] max-w-sm flex-1 min-h-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#6a5af9] rounded-full p-2 flex items-center justify-center">
                  <IoMapOutline className="text-white text-xl" />
                </span>
                <span
                  className={`${titleFont.className} text-lg font-semibold text-white`}
                >
                  {t("bioTitles.ubicacionTitle")}
                </span>
              </div>
              <div>
                <span className="text-[#6a5af9] ">
                  {t("bioTitles.fromTitle")}:
                </span>
                <span> {t("bioInfo.ubicacion")}</span>
              </div>
              <div>
                <span className="text-[#6a5af9] ">
                  {t("bioTitles.live_inTitle")}:
                </span>
                <span> {t("bioInfo.ubicacion")}</span>
              </div>
              <span>{t("bioInfo.disponibilidad")}</span>
            </BackgroundGradient>
            <BackgroundGradient className="bg-[#18162a] rounded-3xl p-4 min-w-[220px] w-full sm:w-[320px] max-w-sm flex-1 min-h-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#e254e9] rounded-full p-2 flex items-center justify-center">
                  <IoCodeOutline className="text-white text-xl" />
                </span>
                <span
                  className={`${titleFont.className} text-lg font-semibold text-white`}
                >
                  {t("bioTitles.especialidadTitle")}
                </span>
              </div>
              <span>{t("bioInfo.especialidad")}</span>
            </BackgroundGradient>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};
