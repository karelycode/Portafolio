"use client";
import React from "react";
import { Tabs } from "../ui/tabs";
import { BackgroundGradient } from "../ui/background-gradient";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../common/AnimatedSection";
import {
  IoBrushOutline,
  IoCodeSlash,
  IoServerOutline,
  IoConstructOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { bodyFont, titleFont } from "@/config/fonts";

const iconMap = {
  IoBrushOutline: <IoBrushOutline className="text-white text-xl" />,
  IoCodeSlash: <IoCodeSlash className="text-white text-xl" />,
  IoServerOutline: <IoServerOutline className="text-white text-xl" />,
  IoConstructOutline: <IoConstructOutline className="text-white text-xl" />,
  IoPersonOutline: <IoPersonOutline className="text-white text-xl" />,
};

// helpers
const slugify = (s: string) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const coerceSkillsToArray = (skills: unknown): string[] => {
  if (Array.isArray(skills)) return skills.filter(Boolean);
  if (typeof skills === "string") {
    // separa por saltos de línea y quita guiones iniciales posibles
    return skills
      .split("\n")
      .map((s) => s.replace(/^\s*-\s*/, "").trim())
      .filter(Boolean);
  }
  return [];
};

const buildIconsSrc = (toolsIcons: unknown): string | null => {
  if (!toolsIcons) return null;
  // si ya es URL completa, úsala
  if (typeof toolsIcons === "string" && toolsIcons.startsWith("http")) {
    return toolsIcons;
  }
  // si es array de slugs, construye la URL de skillicons
  if (Array.isArray(toolsIcons)) {
    const list = toolsIcons.filter(Boolean).join(",");
    return `https://skillicons.dev/icons?i=${list}&perline=11`;
  }
  // si es string con slugs separados por coma (sin protocolo)
  if (typeof toolsIcons === "string") {
    const clean = toolsIcons.replace(/^https?:\/\/\S+\?i=/, ""); // por si viene con prefijo raro
    return `https://skillicons.dev/icons?i=${clean}&perline=11`;
  }
  return null;
};

export const Habilidades = () => {
  const { t } = useTranslation();
  const habilidadesTabs = t("habilidadesTabs", {
    returnObjects: true,
  }) as any[];

  const tabs = (Array.isArray(habilidadesTabs) ? habilidadesTabs : []).map(
    (tab) => {
      const title = tab?.title ?? "";
      const value = tab?.value ?? slugify(title);
      const iconColor = tab?.iconColor ?? "#6a5af9";
      const skillsTitle = tab?.skillsTitle ?? "";
      const skillsArr = coerceSkillsToArray(tab?.skills);
      const toolsTitle = tab?.toolsTitle ?? "";
      const toolsSrc = buildIconsSrc(tab?.toolsIcons);
      const iconKey = tab?.icon as keyof typeof iconMap;
      const iconEl = iconKey && iconMap[iconKey] ? iconMap[iconKey] : null;
      const w = typeof tab?.width === "string" ? tab.width : "100%";
      const h = typeof tab?.height === "string" ? tab.height : "40px";

      return {
        title,
        value,
        content: (
          <BackgroundGradient>
            <div className="w-full overflow-hidden relative rounded-3xl p-8 bg-[#18162a]">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="rounded-full p-2 flex items-center justify-center"
                  style={{ backgroundColor: iconColor }}
                >
                  {iconEl}
                </span>
                <h2 className={`${titleFont.className} text-xl font-bold`}>
                  {title}
                </h2>
              </div>

              {skillsTitle ? (
                <span
                  className={`${bodyFont.className} font-semibold`}
                  style={{ color: iconColor }}
                >
                  {skillsTitle}
                </span>
              ) : null}

              <div className={`${bodyFont.className} mt-1 space-y-1`}>
                {skillsArr.length > 0 ? (
                  skillsArr.map((skill, i) => <div key={i}>- {skill}</div>)
                ) : (
                  <div className="opacity-70">—</div>
                )}
              </div>

              {toolsTitle && toolsSrc && (
                <div className="mt-4">
                  <span
                    className={`${bodyFont.className} font-semibold`}
                    style={{ color: iconColor }}
                  >
                    {toolsTitle}
                  </span>
                  <p className="text-center mt-2">
                    <img
                      src={toolsSrc}
                      alt={`Tools for ${title}`}
                      width={w}
                      height={h}
                      loading="lazy"
                      style={{ objectFit: "contain" }}
                    />
                  </p>
                </div>
              )}
            </div>
          </BackgroundGradient>
        ),
      };
    }
  );

  return (
    <AnimatedSection>
      <section className="w-full py-12 mb-15">
        <h1
          className={`${titleFont.className} text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-0 text-center`}
        >
          {t("titles.skillsTitle")}
        </h1>
        <div className="h-[30rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-15">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </AnimatedSection>
  );
};
