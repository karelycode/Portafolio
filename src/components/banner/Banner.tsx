"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/moving-border";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <motion.section
      id="banner"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className="relative w-full min-h-[30vh] py-12 mt-50 mb-35"
    >
      <div className="flex flex-col items-center justify-center w-full px-4 py-12 md:py-0">
        <div className="w-full absolute  h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text mb-4 text-center">
          Hola, soy Karely Durán
        </h1>
        <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-white mb-4 text-center">
          Ingeniera en Sistemas Computacionales
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-6xl text-center">
          Entusiasta de la tecnología comprometida con el crecimiento. Hábil en
          desarrollo front-end, liderazgo de proyectos y metodologías ágiles.
          Excelente en la resolución de problemas complejos y la innovación
          tecnológica.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-w-lg">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#proyectos");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Button>Ver Proyectos</Button>
          </Link>
          <Button as="a" href="/CV-UX Karely Duran.pdf" download>
            Descargar CV
          </Button>
        </div>
      </div>
    </motion.section>
  );
};
