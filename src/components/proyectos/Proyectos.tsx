"use client";

import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedSection from "../common/AnimatedSection";
import { useTranslation } from "react-i18next";
import { bodyFont, titleFont } from "@/config/fonts";

// Color para el "lugar" (puedes cambiarlo o moverlo al JSON por ítem como `color`)
const PLACE_COLOR = "#6665F1";

// Helpers
const lines = (v: unknown): string[] => {
  if (Array.isArray(v)) return v.filter(Boolean);
  if (typeof v === "string")
    return v
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  return [];
};

type ProyectoItem = {
  titulo?: string;
  lugar?: string;
  img?: string;
  descripcion?: string | string[];
  link?: string;
  herramientas?: string[];
  color?: string; // opcional si luego quieres colorear el "lugar" por ítem
};

export const Proyectos = () => {
  const { t } = useTranslation();

  // En tu JSON ya existe "proyectos": [...]
  const proyectos = t("proyectos", { returnObjects: true }) as ProyectoItem[];

  // Para el H1 uso el header de accesibilidad que ya tenías traducido a "Proyectos"
  const header = t("aboutAccessibility.projectsHeader");

  return (
    <AnimatedSection>
      <section id="proyectos" className="w-full py-12 mb-15">
        <h1
          className={`${titleFont.className} text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-10 text-center`}
        >
          {header || "Proyectos"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr max-w-7xl mx-auto">
          {(Array.isArray(proyectos) ? proyectos : []).map((item, idx) => {
            const {
              titulo = "",
              lugar = "",
              img = "",
              descripcion,
              link = "#",
              herramientas = [],
              color,
            } = item;

            const descLines = lines(descripcion);
            const placeColor = color ?? PLACE_COLOR;

            return (
              <BackgroundGradient
                key={`${titulo}-${idx}`}
                className="bg-[#18162a] rounded-3xl overflow-hidden flex flex-col h-full"
              >
                {/* Imagen */}
                <div className="flex-shrink-0 w-full px-4 pt-4">
                  <div className="w-full h-40 overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={titulo || "Proyecto"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-4 flex flex-col flex-1">
                  <h2
                    className={`${titleFont.className} text-lg font-semibold text-white mb-2`}
                  >
                    {titulo}
                  </h2>

                  {lugar ? (
                    <span
                      className={`${bodyFont.className} text-sm mb-4`}
                      style={{ color: placeColor }}
                    >
                      {lugar}
                    </span>
                  ) : null}

                  <div
                    className={`${bodyFont.className} text-white text-sm flex-1`}
                  >
                    {descLines.length > 1 ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {descLines.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{descLines[0] ?? "—"}</p>
                    )}
                  </div>

                  {/* Herramientas al pie */}
                  {(herramientas?.length ?? 0) > 0 ? (
                    <div className="mt-4">
                      <h3
                        className={`${bodyFont.className} text-sm font-semibold text-white mb-2`}
                      >
                        {t("portfolioAccessibility.herramientas")}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {herramientas.map((tool, i) => (
                          <span
                            key={`${tool}-${i}`}
                            className={`${bodyFont.className} bg-gray-700/55 text-white text-xs px-2 py-1 rounded`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="flex items-center space-x-4 mb-4">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${bodyFont.className} text-sm`}
                      style={{ color: placeColor }}
                    >
                      {t("portfolioAccessibility.proyect")}
                    </a>
                  </div>
                </div>
              </BackgroundGradient>
            );
          })}
        </div>
      </section>
    </AnimatedSection>
  );
};
