"use client";
import React from "react";
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
        Especialidad en Transformación digital en las organizaciones,
        <br />
        diseño UI/UX
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
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
          {info.map((item, idx) => (
            <div
              key={idx}
              className="flex-1 bg-[#18162a] rounded-xl p-6 card-gradient-border"
            >
              <div className="flex items-center mb-3">
                {item.icon}
                <h2 className="text-2xl font-semibold text-white">
                  {item.titulo}
                </h2>
              </div>
              <div className="text-white text-base">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
