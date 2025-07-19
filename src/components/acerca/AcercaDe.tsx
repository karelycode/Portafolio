"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IoCodeOutline, IoMapOutline } from "react-icons/io5";

const info = [
  {
    titulo: "Ubicación",
    icon: (
      <span className="bg-[#6a5af9] rounded-full p-3 mr-3 flex items-center justify-center">
        <IoMapOutline className="text-white text-2xl" />
      </span>
    ),
    content: (
      <div>
        <span className="font-semibold text-[#6a5af9]">De:</span> Durango,
        Durango, Mex.
        <br />
        <span className="font-semibold text-[#6a5af9]">Vivo en:</span> Durango,
        Durango, Mex.
        <br />
        Con disponibilidad de reubicación
      </div>
    ),
  },
  {
    titulo: "Especialización",
    icon: (
      <span className="bg-[#e254e9] rounded-full p-3 mr-3 flex items-center justify-center">
        <IoCodeOutline className="text-white text-2xl" />
      </span>
    ),
    content: (
      <div>
        Especialidad en Transformación digital en las organizaciones y diseño
        UI/UX
      </div>
    ),
  },
];

export const AcercaDe = () => {
  return (
    <section className=" w-full py-12 mb-15">
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold gradient-text mb-8 text-center">
          Acerca de mí
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-6xl text-center">
          Soy ingeniera en sistemas computacionales especializada en
          transformación digital y experiencia de usuario. Combino habilidades
          técnicas con enfoque UX/UI para diseñar soluciones centradas en el
          usuario que optimizan procesos y mejoran la interacción digital.
          Apasionada por la innovación tecnológica y la aplicación de IA en
          experiencias digitales.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full max-w-4xl justify-center items-stretch">
          {info.map((item, idx) => (
            <BackgroundGradient
              key={idx}
              className="bg-[#18162a] rounded-3xl p-4 min-w-[220px] w-full sm:w-[320px] max-w-sm flex-1 min-h-[180px]"
            >
              <div className="flex items-center mb-2">
                {item.icon}
                <h2 className="text-lg font-semibold text-white">
                  {item.titulo}
                </h2>
              </div>
              <div className="text-white text-sm">{item.content}</div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};
