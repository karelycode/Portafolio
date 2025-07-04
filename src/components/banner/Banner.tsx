"use client";
import React from "react";

export const Banner = () => {
  return (
    <section className="relative w-full min-h-[30vh] py-12 mt-50 mb-35">
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
        <h1 className="text-5xl sm:text-7xl md:text-7xl font-bold gradient-text mb-4 text-center">
          Hola, soy Karely Durán
        </h1>
        <h2 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-4 text-center">
          Ingeniera en Sistemas Computacionales
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-6xl text-center">
          Entusiasta de la tecnología comprometida con el crecimiento. Hábil en
          desarrollo front-end, liderazgo de proyectos y metodologías ágiles.
          Excelente en la resolución de problemas complejos y la innovación
          tecnológica.
        </p>
        <a href="#projects" className="btn-gradient">
          Ver Proyectos
        </a>
      </div>
    </section>
  );
};
