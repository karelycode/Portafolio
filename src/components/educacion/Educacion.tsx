"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedSection from "../common/AnimatedSection";
import { useTranslation } from "react-i18next";
import { bodyFont, titleFont } from "@/config/fonts";

// Paleta cíclica por tarjeta (puedes editarla o leerla del JSON después)
const COLORS = ["#6a5af9", "#B514C6", "#F5278C", "#b95af9", "#18162a"];

// Helpers
const coerceLines = (val: unknown): string[] => {
  if (Array.isArray(val)) return val.filter(Boolean);
  if (typeof val === "string") {
    return val
      .split("\n")
      .map((s) => s.replace(/^\s*-\s*/, "").trim())
      .filter(Boolean);
  }
  return [];
};

type EduItem = {
  date?: string; // 2014-2017
  title?: string; // Educación secundaria
  place?: string; // E.S.T. N°67
  description?: string | string[];
  color?: string; // opcional: si algún día lo agregas en el JSON
};

export const Educacion = () => {
  const { t } = useTranslation();

  // Estructura esperada desde tu JSON de traducciones:
  // "timeline": { "education": { "title": "Educación", "info": [ { "date": "...", "title": "...", "place": "...", "description": "..." }, ... ] } }
  const edu = t("timeline.education", { returnObjects: true }) as {
    title?: string;
    info?: EduItem[];
  };

  const items = Array.isArray(edu?.info) ? edu!.info! : [];

  return (
    <AnimatedSection>
      <section className="w-full py-12 mb-15">
        <h1
          className={`${titleFont.className} text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-10 text-center`}
        >
          {edu?.title ?? "Educación"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          {items.map((item, idx) => {
            const color = item.color ?? COLORS[idx % COLORS.length];
            const lines = coerceLines(item.description);

            return (
              <BackgroundGradient
                key={`${item.title}-${idx}`}
                className="bg-[#18162a] rounded-3xl p-4 w-full h-full flex flex-col"
              >
                {/* Periodo */}
                {item.date ? (
                  <div
                    className={`${bodyFont.className} flex items-center mb-2`}
                  >
                    <span
                      className="rounded-2xl p-3 mr-3 flex items-center justify-center"
                      style={{ backgroundColor: color }}
                    >
                      {item.date}
                    </span>
                  </div>
                ) : null}

                {/* Título */}
                {item.title ? (
                  <h2
                    className={`${titleFont.className} text-lg font-semibold text-white mb-2`}
                  >
                    {item.title}
                  </h2>
                ) : null}

                {/* Escuela / lugar */}
                {item.place ? (
                  <div
                    className={`${bodyFont.className} flex items-center mb-2`}
                  >
                    <span style={{ color }}>{item.place}</span>
                  </div>
                ) : null}

                {/* Descripción */}
                <div className={`${bodyFont.className} text-white text-sm`}>
                  {lines.length > 1 ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {lines.map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{lines[0] ?? "—"}</p>
                  )}
                </div>
              </BackgroundGradient>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
};
