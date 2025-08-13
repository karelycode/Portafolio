"use client";
import React from "react";
import { Tabs } from "../ui/tabs";
import { BackgroundGradient } from "../ui/background-gradient";
import AnimatedSection from "../common/AnimatedSection";
import {
  IoBrushOutline,
  IoCodeSlash,
  IoServerOutline,
  IoConstructOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { bodyFont, titleFont } from "@/config/fonts";

const tabs = [
  {
    title: "Diseño UX/UI",
    value: "frontend",
    content: (
      <BackgroundGradient>
        <div className="w-full overflow-hidden relative rounded-3xl p-8 bg-[#18162a]">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#6a5af9] rounded-full p-2 flex items-center justify-center">
              <IoBrushOutline className="text-white text-xl" />
            </span>
            <h2 className={`${titleFont.className} text-xl font-bold`}>
              Diseño UX/UI
            </h2>
          </div>
          <span
            className={`${bodyFont.className} font-semibold text-[#6a5af9]`}
          >
            Habilidades:
          </span>
          <div className={`${bodyFont.className}`}>
            <br />
            -Diseño centrado en el usuario
            <br />
            -Diseño de interfaces responsivas
            <br />
            -Prototipado y wireframing
            <br />
            -Arquitectura
            <br />
            -Pruebas de usabilidad
            <br />
            -Diseño de experiencias digitales
          </div>
          <div className="">
            <span
              className={`${bodyFont.className} font-semibold text-[#6a5af9]`}
            >
              Herramientas:
            </span>
            <p className="text-center">
              <img
                src="https://skillicons.dev/icons?i=figma,ai&perline=14"
                width="85px"
                height="700px"
                alt="Habilidades de Diseño"
              />
            </p>
          </div>
        </div>
      </BackgroundGradient>
    ),
  },
  {
    title: "Desarrollo",
    value: "desarrollo",
    content: (
      <BackgroundGradient>
        <div className="w-full overflow-hidden relative rounded-3xl p-4 bg-[#18162a]">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#F5278C] rounded-full p-2 flex items-center justify-center">
              <IoCodeSlash className="text-white text-xl" />
            </span>
            <h2 className={`${titleFont.className} text-xl font-bold`}>
              Desarrollo
            </h2>
          </div>
          <span
            className={`${bodyFont.className} font-semibold text-[#F5278C]`}
          >
            Habilidades:
          </span>
          <div className={`${bodyFont.className}`}>
            - Buenas practicas de desarrollo
            <br />
            - Optimización y debugging
            <br />
            - Consumo de APIs
            <br />
            - Desarrollo frontend y backend
            <br />
            - Desarrollo de aplicaciones web y móviles
            <br />- Control de versiones con Git
          </div>
          <div className="">
            <span
              className={`${bodyFont.className} font-semibold text-[#F5278C]`}
            >
              Herramientas:
            </span>
            <p className="text-center mb-2 ">
              <img
                src="https://skillicons.dev/icons?i=java,py,flutter,dart,androidstudio,html,css,js,ts,bootstrap,tailwind,nextjs,vite,react,vercel,unity,git,github&perline=11"
                alt="Habilidades de Desarrollo"
                width="620px"
                height="700px"
              />
            </p>
          </div>
        </div>
      </BackgroundGradient>
    ),
  },
  {
    title: "Cloud y DevOps",
    value: "cloud",
    content: (
      <BackgroundGradient>
        <div className="w-full overflow-hidden relative rounded-3xl p-8 bg-[#18162a]">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#B514C6] rounded-full p-2 flex items-center justify-center">
              <IoServerOutline className="text-white text-xl" />
            </span>
            <h2 className={`${titleFont.className} text-xl font-bold`}>
              Cloud y DevOps
            </h2>
          </div>
          <span
            className={`${bodyFont.className} font-semibold text-[#B514C6]`}
          >
            Habilidades:
          </span>
          <div className={`${bodyFont.className}`}>
            - Modelado de bases de datos
            <br />
            - Administración de DB SQL y NoSQL
            <br />
            - Consultas y optimización de bases de datos
            <br />
            - Visualización de datos
            <br />
            - Automatización de reportes
            <br />- Implementación de soluciones en la nube
          </div>
          <div className="">
            <span
              className={`${bodyFont.className} font-semibold text-[#B514C6]`}
            >
              Herramientas:
            </span>
            <p className="text-center">
              <img
                src="https://skillicons.dev/icons?i=mysql,postgresql,supabase,firebase,docker&perline=14"
                width="230px"
                height="700px"
                alt="Habilidades de Cloud y DevOps"
              />
            </p>
          </div>
        </div>
      </BackgroundGradient>
    ),
  },
  {
    title: "Gestión de Proyectos",
    value: "gestion",
    content: (
      <BackgroundGradient>
        <div className="w-full overflow-hidden relative rounded-3xl p-8 bg-[#18162a]">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#b95af9] rounded-full p-2 flex items-center justify-center">
              <IoConstructOutline className="text-white text-xl" />
            </span>
            <h2 className={`${titleFont.className} text-xl font-bold`}>
              Gestión de Proyectos
            </h2>
          </div>
          <span
            className={`${bodyFont.className} font-semibold text-[#b95af9]`}
          >
            Habilidades:
          </span>
          <div className={`${bodyFont.className}`}>
            - Metodologías ágiles
            <br />
            - Gestión de tiempos, tareas y recursos
            <br />
            - Liderazgo de equipos
            <br />
            - Documentación funcional y técnica
            <br />
            - Análisis de requerimientos
            <br />- Planificación y seguimiento de proyectos
          </div>
          <div className="">
            <span className="font-semibold text-[#b95af9]">Herramientas:</span>
            <p className="text-center ">
              <img
                src="https://skillicons.dev/icons?i=notion,gmail,gcp,&perline=14"
                width="180px"
                height="700px"
                alt="Habilidades de Gestión de Proyectos"
              />
            </p>
          </div>
        </div>
      </BackgroundGradient>
    ),
  },
  {
    title: "Blandas",
    value: "blandas",
    content: (
      <BackgroundGradient>
        <div className="w-full overflow-hidden relative rounded-3xl p-8 bg-[#18162a]">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-[#F5278C] rounded-full p-2 flex items-center justify-center">
              <IoPersonOutline className="text-white text-xl" />
            </span>
            <h2 className={`${titleFont.className} text-xl font-bold`}>
              Habilidades Blandas
            </h2>
          </div>
          <span
            className={`${titleFont.className} font-semibold text-[#F5278C]`}
          >
            Habilidades:
          </span>
          <div className={`${bodyFont.className}`}>
            - Liderazgo
            <br />
            - Trabajo en equipo
            <br />
            - Comunicación efectiva
            <br />
            - Creatividad
            <br />
            - Adaptabilidad
            <br />
            - Responsabilidad
            <br />
            - Empatía
            <br />
            - Resolución de problemas
            <br />- Trabajo bajo presión
          </div>
        </div>
      </BackgroundGradient>
    ),
  },
];

export const Habilidades = () => {
  return (
    <AnimatedSection>
      <section className=" w-full py-12 mb-15">
        <h1
          className={`${titleFont.className} text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-0 text-center`}
        >
          Habilidades
        </h1>
        <div className="h-[30rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full items-start justify-start my-15">
          <Tabs tabs={tabs} />
        </div>
      </section>
    </AnimatedSection>
  );
};
