"use client";

import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedSection from "../common/AnimatedSection";
import React from "react";

const info = [
  {
    titulo: "Rediseño e-comerce",
    lugar: <span className="text-[#6a5af9]">Fortune Acoustics</span>,
    img: "/ecomerce.png",
    content: (
      <div>
        Rediseño de UX/UI del e-comerce de Fortune Acoustics para mejorar la
        experiencia de los usuarios y alentarlos a generar compras.
        <br />
        El objetivo es crear una interfaz más atráctiva y moderna, para
        actualizar la imagen de la marca y facilitar la navegación de los
        usuarios.
      </div>
    ),
    link: "https://www.fortuneacoustics.com/",

    herramientas: ["Figma", "WordPress"],
  },
  {
    titulo: "Landing page promociones",
    lugar: <span className="text-[#6a5af9]">Fortune Acoustics</span>,
    img: "/Landing promociones.png",
    content: (
      <div>
        Diseño y desarrollo de una landing page especial para promociones de
        Fortune Acoustics, la cuál tiene como objetivo ser un apoyo del
        e-comerce. <br />
        La landing page está diseñada para ser atractiva y fácil de navegar,
        permitiendo a los usuarios encontrar rápidamente las promociones.
      </div>
    ),
    link: "https://curso-delikeacliente.vercel.app",
    herramientas: ["Figma", "Next.js", "Tailwind CSS"],
  },
  {
    titulo: "Landing page cursos",
    lugar: (
      <span className="text-[#6a5af9]">Fortune Acoustics, Nettcontrol</span>
    ),
    img: "/Landing curso.png",
    content: (
      <div>
        Diseño y desarrollo de una landing page de cursos especiales impartidos
        por Fortune Acoustics y Nettcontrol. La interfaz está diseñada pcon un
        aire moderno y profesional, con un enfoque en la usabilidad y la
        claridad de la información.
      </div>
    ),
    link: "https://curso-delikeacliente.vercel.app",

    herramientas: ["Figma", "Next.js", "Tailwind CSS", "Zoho"],
  },
  {
    titulo: "Clarify",
    lugar: <span className="text-[#6a5af9]">Innovatec 2024</span>,
    img: "/logo-clarify.jpeg",
    content: (
      <div>
        <span>
          Diseño, desarrollo y gestión de un proyecto de app móvil para personas
          con discapacidad visual, la cual implementa un asistente de IA que
          ayuda a los usuarios a navegar su entorno.
        </span>
        <br />
        Ganadores del primer lugar de Innovatec 2024 a nivel local, tercer lugar
        a nivel regional y mención honorífica por participación destacada a
        nivel nacional.
        <br />
        Si quieres ver el proyecto, puedes visitar la landing page creada por{" "}
        <a
          href={"https://marcotbcreator.dev/es"}
          className="text-sm text-[#6665F1] hover:underline hover:text-[#e254e9]"
        >
          MarcoTheBigCreator
        </a>
        .
      </div>
    ),
    link: "https://clarify-page.vercel.app/es",

    herramientas: ["Figma", "Flutter", "PyTorch", "Firebase"],
  },
  {
    titulo: "BudgetBuddy",
    lugar: <span className="text-[#6a5af9]">HackDgo</span>,
    img: "/budget.png",
    content: (
      <div>
        Diseño y desarrollo de una aplicación web para ayudar a los usuarios a
        gestionar su presupuesto de manera eficiente a través de análisis
        interpretados con IA. Ganadora del tercer lugar en HackDgo 2024.
      </div>
    ),
    link: "https://budgetbuddy.vercel.app/",

    herramientas: ["Figma", "HTML", "CSS", "API de OpenAI"],
  },
];

export const Proyectos = () => {
  return (
    <AnimatedSection>
      <section id="proyectos" className="w-full py-12 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-10 text-center">
          Proyectos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr max-w-7xl mx-auto">
          {info.map((item, idx) => (
            <BackgroundGradient
              key={idx}
              className="bg-[#18162a] rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="flex-shrink-0 w-full px-4 pt-4">
                <div className="w-full h-40 overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {item.titulo}
                </h2>
                <span className="text-sm text-[#6665F1] mb-4">
                  {item.lugar}
                </span>

                <div className="text-white text-sm flex-1">{item.content}</div>

                {/* Herramientas al pie */}
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Herramientas:
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.herramientas.map((tool) => (
                      <span
                        key={tool}
                        className="bg-gray-700/55 text-white text-xs px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <a
                      href={item.link}
                      className="text-sm text-[#6665F1] hover:underline hover:text-[#e254e9]"
                    >
                      Proyecto
                    </a>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
};
