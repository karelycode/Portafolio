"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedSection from "../common/AnimatedSection";
import { bodyFont, titleFont } from "@/config/fonts";

const info = [
  {
    titulo: "Educación secundaria",
    escuela: <span className="text-[#6a5af9] ">E.S.T. N°67</span>,
    period: (
      <span className="bg-[#6a5af9] rounded-2xl p-3 mr-3 flex items-center justify-center">
        2014-2017
      </span>
    ),
    content: (
      <div>
        Durante mi educación secundaria tuve la oportunidad de llevar como
        especialidad el taller de róbotica, en el cuál adquirí conocimientos
        como el trabajo en equipo y bajo presión, diseño y programación de
        robots.
      </div>
    ),
  },
  {
    titulo: "Técnica en ofimática",
    escuela: <span className="text-[#B514C6]">CBTis 110</span>,
    period: (
      <span className="bg-[#B514C6] rounded-2xl p-3 mr-3 flex items-center justify-center">
        2017-2020
      </span>
    ),
    content: (
      <div>
        <span>
          En mi formación como técnica en ofimática logre obtener conocimientos
          en:
        </span>
        <br />
        -Gestión de paquete office
        <br />
        -Gestión y administración de redes
        <br />
        -Gestión y administración de archivos
      </div>
    ),
  },
  {
    titulo: "Ingeniería en sistemas computacionales",
    escuela: (
      <span className="text-[#F5278C]">Instituto Tecnológico de Durango</span>
    ),
    period: (
      <span className="bg-[#F5278C] rounded-2xl p-3 mr-3 flex items-center justify-center">
        2020-2024
      </span>
    ),
    content: (
      <div>
        Egresada destacada de la carrera, adquiriendo diversas habilidades en
        desarrollo y gestión de sistemas tecnológicos, liderazgo de equipos de
        trabajo y organización de eventos.
      </div>
    ),
  },
];

export const Educacion = () => {
  return (
    <AnimatedSection>
      <section className=" w-full py-12 mb-15">
        <h1
          className={`${titleFont.className} text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-10 text-center`}
        >
          Educación
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          {info.map((item, idx) => (
            <BackgroundGradient
              key={idx}
              className="bg-[#18162a] rounded-3xl p-4  w-full h-full flex flex-col"
            >
              <div className={`${bodyFont.className} flex items-center mb-2`}>
                {item.period}
              </div>
              <div>
                <h2
                  className={`${titleFont.className} text-lg font-semibold text-white mb-2`}
                >
                  {item.titulo}
                </h2>
              </div>
              <div className={`${bodyFont.className} flex items-center mb-2`}>
                <span>{item.escuela}</span>
              </div>
              <div className={`${bodyFont.className} text-white text-sm`}>
                {item.content}
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};
